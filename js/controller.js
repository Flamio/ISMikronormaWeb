/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var controller = 
{
    handleAnalysisClick: function (view, model, dialogId)
    {
	ISMikronormaWebApi.getAvarageTimePerProcess(model.currentProcess, function (response)	
	{	
                view.setTimesInAnalysisDialog(response);
		view.openDialog(dialogId.id);
	});
    },
    handleAddingOperation: function (model,view,name,comment)
    {
        var actualTime = model.partsOfVideo[model.currentTimeSelected].lenght;
        ISMikronormaWebApi.getLastOperationPosition(model.currentApproach,function(maxPositionresponse)
        {
            var maxPosition = maxPositionresponse.operationsposition;
            ISMikronormaWebApi.addOperation(model.currentApproach, comment, name, model.currentDirectoryValueId, model.currentDirectoryValue, actualTime, Number(maxPosition)+1, function(response)
            {
               view.showAlertMessage(response.success);
               view.closeAddOperationDialog();
                model.loadVariants(model.currentApproach,function(answer)
                {
                    view.setVariants(answer.variants);
                });
            });
        });
        
    },
    
    handleOnValueClick: function(model,view,value, idValueInDirectories)
    {
      model.currentDirectoryValueId = idValueInDirectories;
      model.currentDirectoryValue = value;
      view.setActualValueInAddingOperationDialog(value);
    },
    handleDirectoryNodeClick: function(nodeId)
    {
        model.getChildsDirectory(nodeId, function(response)
        {
            view.setDirectoryListInNode(nodeId,response);
        });
    },
    handleTimeDblClick: function(view, model,id)
    {
        model.getChildsDirectory(model.currentDirectory, function(response)
        {
            view.setDirectoryList(response);
            view.showAddOperationDialog();
            model.currentTimeSelected = id;
        });
    },
    closeAddingOperationDialog: function(view)
    {
        view.closeAddOperationDialog();
    },
    closeAddProcessDialog: function(view)
    {
       view.closeAddProcessDialog();
    },
    showAddProcessDialog: function(view)
    {
      view.showAddProcessDialog();
    },
    
    closeAddApproachDialog: function(view)
    {
       view.closeAddApproachDialog();
    },
    showAddApproachDialog: function(view)
    {
        if (model.currentProcess == -1)
        {
            return;
        }
        view.showAddApproachDialog();
    },
    
    handleOnload:function(model,view)
    {
        view.setModel(model);
        view.updateProcessesAndApproaches(model);
    },
    handleOnKeyDown: function(event,view)
    {
        if (event.keyCode==32)
        {
            view.playPauseVideo(model);
            return false;
        }
        else 
        {
            return event.keyCode;
        }
    },
    handleAddingProcess: function(model,view,name,comment,directory)
    {
        model.addProcess(name,comment, directory, function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches(model);
            view.closeAddProcessDialog();
        });
    },
    handleAddingApproach: function(model,view,name,comment)
    {
        model.addApproach(name,comment, function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches(model);
            view.closeAddApproachDialog();
        });
    },
    handleProcessClick: function(id)
    {
        model.getProcess(id, function(response)
        {
            model.currentDirectory = response[0].processesdirectoryId;
            model.currentProcess = id;
            model.currentApproach = -1;
            model.partsOfVideo = [];
            view.selectProcess(id);
            view.setVideo("");
        });
       
    },
    
    handleApproachClick: function(id, idProcess)
    {
        model.getProcess(idProcess, function(response)
        {
            model.currentDirectory = response[0].processesdirectoryId;
            model.currentProcess = idProcess;
            model.currentApproach = id;
            model.partsOfVideo = [];
            view.selectApproach(id);

            model.loadVariants(id,function(answer)
            {
                view.setVariants(answer.variants);
                view.setVideo(answer.videoFilename);
            });
        });
    },
    
    handlePlayClick:function()
    {
         view.playPauseVideo(model,view);
    },
    
    showEditDilog: function(view, model)
    {
        if (model.currentApproach !=-1 && model.currentProcess!=-1)
        {
            model.getApproach(model.currentApproach, function (response)
            {
                view.showAddApproachDialog(response[0].approachname, response[0].approachcomment);
            });
        }
        
        else if (model.currentApproach ==-1 && model.currentProcess!=-1)
        {
            model.getProcess(model.currentProcess, function (response)
            {
                console.log(response);
                view.showAddProcessDialog(response[0].processesname, response[0].processescomment, response[0].processesdirectoryId);
            });
        }
    },
    
    handleEditApproach: function(model,view,name, comment)
    {
        model.updateApproach(name,comment,function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches(model);
            view.closeAddApproachDialog();
        });
    },
    
    handleEditProcess: function(model,view,name, comment, directory)
    {
        model.updateProcess(name,comment,directory,function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches(model);
            view.closeAddProcessDialog();
        });
    },
    
    handleBackward: function(view)
    {
         view.setVideoCurrent(-2);
    },
 
    handleForward: function(view)
    {
         view.setVideoCurrent(2);
    },
    handleSpeed: function(view,speed,id)
    {
        view.setSpeedVideo(speed);
        view.pressSpeedButton(id);
    },
    handleUpploadFile: function(model,view)
    {
        if (model.currentApproach==-1)
        {
            return;
        }
        view.clickOnUploadFile();
    },
    handleFileSelected: function(model,view)
    {
        view.submitUploadingFile(model.currentApproach);
    }
    
}

