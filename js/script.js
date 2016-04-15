
var xhr = 
{
    getXmlHttp: function()
    {
          var xmlhttp;
            try {
              xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
              try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (E) {
                xmlhttp = false;
              }
            }
            if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
              xmlhttp = new XMLHttpRequest();
            }
            return xmlhttp;
     },
              
    getAjaxData: function(url, request, onResponse)
    {
        var req = this.getXmlHttp();
        req.onreadystatechange = function() 
        {
            if (req.readyState == 4) 
            {
                if(req.status == 200) 
                {
                    if (onResponse!=undefined)
                    {
                        onResponse(JSON.parse(req.responseText));
                    }
                }
            }
        } 
        req.open('POST', url, true); 
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        req.send(request);
    }
}

var ISMikronormaWebApi =
{
    getProcessesAndApproaches: function(onAnswer)
    {
        xhr.getAjaxData("api.php?action=3","",onAnswer);
    },
    addProcess: function(name,comment,onAnswer)
    {
        xhr.getAjaxData("api.php?action=2", "name="+name+"&comment="+comment, onAnswer);
    },
    
    loadVariants: function(idApproach,onAnswer)
    {
        xhr.getAjaxData("api.php?action=1","approachId="+idApproach,onAnswer);
    },
    addApproach: function(name,comment,idProcess,onAnswer)
    {
        xhr.getAjaxData("api.php?action=addApproach", "name="+name+"&comment="+comment+"&idProcess="+idProcess, onAnswer);
    },
    
    updateApproach: function(id,name,comment, onAnswer)
    {
        xhr.getAjaxData("api.php?action=updateApproach&id="+id,"name="+name+"&comment="+comment,onAnswer);
    },
    
    updateProcess: function (id,name,comment,onAnswer)
    {
        xhr.getAjaxData("api.php?action=updateProcess&id="+id,"name="+name+"&comment="+comment, onAnswer);
    },
    getApproach: function(id,onAnswer)
    {
        xhr.getAjaxData("api.php?action=getApproach&id="+id,null,onAnswer);
    },
    getProcess: function(id,onAnswer)
    {
        xhr.getAjaxData("api.php?action=getProcess&id="+id,null,onAnswer);
    }
}

var partOfVideo = 
{
}


var view = 
{
    submitUploadingFile: function(idApproach)
    {
        document.getElementById('formUppload').setAttribute('action','api.php?action=4&approachId='+idApproach);
        document.getElementById('formUppload').submit();  
    },
    clickOnUploadFile: function()
    {
        document.getElementById('uploadFile').click(); 
    },
    unPressAllSpeedButtons: function()
    {
        document.getElementById("0125").setAttribute("pressed","");
        document.getElementById("025").setAttribute("pressed","");
        document.getElementById("1").setAttribute("pressed","");
        document.getElementById("2").setAttribute("pressed","");
    },
    
    setVideoCurrent: function (sec)
    {
        document.getElementById("videoField").currentTime+=sec;
    },
    
    pressSpeedButton: function(id)
    {
        this.unPressAllSpeedButtons();
        id.setAttribute("pressed","pressed");
    },
    
    setSpeedVideo: function(speed)
    {
        document.getElementById("videoField").playbackRate = speed;
    },
    
    setVariants: function(variants)
    {
        var innerHtml = "";
        for (var i in variants) 
                {
                    innerHtml+= "<tr id='operation"+variants[i].operationsid+"' onclick='onOperationsClick(this.id);' class='operation'>"
                    + " <td>"+variants[i].operationsname+"</td>"
                    + " <td>&nbsp;</td>"
                    + " <td>&nbsp;</td>"
                    + " <td>&nbsp;</td>"
                    + "<td>"+variants[i].operationsupdated+"</td>"
                    + " <td>&nbsp;</td>"
                    + "</tr>";
                }
                document.getElementById("actionsTableBody").innerHTML = innerHtml;
    },
    setVideo: function (video)
    {
        document.getElementById("videoField").setAttribute('src', video);
        this.pressSpeedButton(document.getElementById("1"));
    },
    selectApproach: function(id)
    {
        this.unselectAllInProcessesTree();
        document.getElementById("approach"+id).className = "clickedApproachRow";
    },
    unselectAllInProcessesTree : function ()
    {
        document.getElementById('timesTable').innerHTML = "";
        var table = document.getElementById("processTableBody");
        var cells = table.getElementsByTagName("tr"); 
        for (var i = 0; i < cells.length; i++) 
        { 
            if (cells[i].className == "clickedProccessRow")
            {
                cells[i].className = "process";
            }
            else if (cells[i].className == "clickedApproachRow")
            {
                cells[i].className = "approach";
            }
        }
    },
    selectProcess: function(id)
    {
        this.unselectAllInProcessesTree();
        document.getElementById("process"+id).className = "clickedProccessRow";
    },
    closeAddProcessDialog: function()
    {
        this.closeDialog('addingProcessDiv');
    },
    showAddProcessDialog: function(name,comment)
    {
        name = name == null ? "" : name;
        comment = comment == null ? comment = "" : comment = comment;
        
        var onclick = "";
        if (name == "" && comment == "")
        {
            onclick = "controller.handleAddingProcess(document.getElementById('addingProcessInputName').value,document.getElementById('addingProcessInputComment').value)";
        }
        else 
        {
            onclick = "controller.handleEditProcess(document.getElementById('addingProcessInputName').value,document.getElementById('addingProcessInputComment').value)";
        }
        
        document.getElementById('okProcess').setAttribute('onclick',onclick);
        
        document.getElementById("addingProcessInputName").value = name;
        document.getElementById("addingProcessInputComment").value = comment;
        this.openDialog('addingProcessDiv');
    },
    
    closeAddApproachDialog: function()
    {
        this.closeDialog('addingApproachDiv');
    },
    showAddApproachDialog: function(name,comment)
    {
        console.log(name);
        console.log(comment);
        name = name == null ? "" : name;
        comment = comment == null ? comment = "" : comment = comment;
        var onclick = "";
        if (name == "" && comment == "")
        {
            onclick = "controller.handleAddingApproach(document.getElementById('addingApproachInputName').value,document.getElementById('addingApproachInputComment').value)";
        }
        else 
        {
            onclick = "controller.handleEditApproach(document.getElementById('addingApproachInputName').value,document.getElementById('addingApproachInputComment').value)";
        }
        
        document.getElementById('okApproach').setAttribute('onclick',onclick);
        
        document.getElementById("addingApproachInputName").value = name;
        document.getElementById("addingApproachInputComment").value = comment;
        this.openDialog('addingApproachDiv');
    },
    
    closeDialog: function(id)
    {
         document.getElementById(id).style.display = 'none';
        document.getElementById("blockerBackground").style.display = 'none';
    },
    
    openDialog: function(id)
    {
        document.getElementById(id).style.display = 'block';
        document.getElementById("blockerBackground").style.display = 'block';
    },
    
    updateProcessesAndApproaches: function()
    {
        model.loadProcessesAndApproaches(function(response)
        {
              var innerHtml = "";
              var processIds =[];
              for(var i in response)
                {
                    if (processIds.indexOf(response[i].processesid)==-1)
                    {
                        innerHtml += "<tr id='process"+response[i].processesid+"' onclick='controller.handleProcessClick("+response[i].processesid+");return false;' class='process'>"
                         + " <td>"+response[i].processesname+"</td>"
                         + "<td>"+response[i].processescomment+"</td>"
                         + "<td>"+response[i].processesupdated+"</td>"
                         + "</tr>";
                         processIds.push(response[i].processesid);
                     }   

                    if (response[i].approachid!=null)            
                    {
                         innerHtml+="<tr id='approach"+response[i].approachid+"' onclick='controller.handleApproachClick("+response[i].approachid+","+response[i].processesid+");return false;' class='approach' belong='"+response[i].processesid+"'>"
                         + " <td>"+response[i].approachname+"</td>"
                         + "<td>"+response[i].approachcomment+"</td>"
                         + "<td>"+response[i].approachupdated+"</td>"
                         + "</tr>";
                    }

                }
           
           document.getElementById("processTableBody").innerHTML = innerHtml; 
        });
    },
    
    showAlertMessage:function(message)
    {
        alert(message);
        return false;
    },
    updateTimesField: function(model)
    {
        var innerHtml = "";
        console.log(model.partsOfVideo);
        for(var i=0;i<model.partsOfVideo.length;i++)
        {
            innerHtml+="<tr id="+i+"><td>"+model.partsOfVideo[i].begin.toFixed(3)+"-"+model.partsOfVideo[i].end.toFixed(3)+"</td>\n\
                <td>"+model.partsOfVideo[i].lenght.toFixed(3)+"</td></tr>"
        }
        console.log(innerHtml);
        document.getElementById("timesTable").innerHTML = innerHtml;
    },
    playPauseVideo: function(model)
    {
        if (document.getElementById("videoField").getAttribute('src')=="")
        {
            return;
        }
        if (model.isVideoPlaying)
        {
            model.isVideoPlaying = false;
            document.getElementById("videoField").pause();
            document.getElementById("playButton").setAttribute("src","img/play.png")
            partOfVideo.end = document.getElementById("videoField").currentTime;
            partOfVideo.lenght = partOfVideo.end - partOfVideo.begin;
            
            clonePartOfVideo = partOfVideo.constructor();
            for (p in partOfVideo)
            {
                clonePartOfVideo[p] = partOfVideo[p];
            }
            
            model.partsOfVideo.push(clonePartOfVideo);
            this.updateTimesField(model);
        }
        else
        {
            document.getElementById("videoField").play();
            document.getElementById("playButton").setAttribute("src","img/pause.png");
            model.isVideoPlaying = true;
            partOfVideo.begin = document.getElementById("videoField").currentTime;
        }
    }
}

var model = 
{
    currentProcess: -1,
    currentApproach: -1,
    isVideoPlaying: false,
    partsOfVideo:[],
    
    loadProcessesAndApproaches: function (answerFunc)
    {
        ISMikronormaWebApi.getProcessesAndApproaches(answerFunc);
    },
    addProcess: function (name,comment,answerFunc)
    {
        ISMikronormaWebApi.addProcess(name,comment,answerFunc);
    },
    
    addApproach: function(name,comment,onAnswer)
    {
       ISMikronormaWebApi.addApproach(name,comment,this.currentProcess,onAnswer);
    },
    
    getApproach:function(id,onAnswer)
    {
        ISMikronormaWebApi.getApproach(id,onAnswer);
    },
    
    getProcess:function(id,onAnswer)
    {
        ISMikronormaWebApi.getProcess(id,onAnswer);
    },
    
    updateProcess: function(name, comment, onAnswer)
    {
        ISMikronormaWebApi.updateProcess(this.currentProcess,name,comment,onAnswer);
    },
    
    updateApproach: function(name, comment, onAnswer)
    {
        ISMikronormaWebApi.updateApproach(this.currentApproach,name,comment,onAnswer);
    },
    
    
    loadVariants: function(idApproach, answerFunc)
    {
        ISMikronormaWebApi.loadVariants(idApproach,answerFunc);
    }
}

var controller = 
{
    closeAddProcessDialog: function()
    {
       view.closeAddProcessDialog();
    },
    showAddProcessDialog: function()
    {
      view.showAddProcessDialog();
    },
    
    closeAddApproachDialog: function()
    {
       view.closeAddApproachDialog();
    },
    showAddApproachDialog: function()
    {
        if (model.currentProcess == -1)
        {
            return;
        }
        view.showAddApproachDialog();
    },
    
    handleOnload:function(view)
    {
        view.updateProcessesAndApproaches();
    },
    handleOnKeyDown: function(event,view)
    {
        if (event.keyCode==32)
        {
            view.playPauseVideo(model);
        }
        else 
        {
            return event.keyCode;
        }
    },
    handleAddingProcess: function(name,comment)
    {
        model.addProcess(name,comment, function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches();
            view.closeAddProcessDialog();
        });
    },
    handleAddingApproach: function(name,comment)
    {
        model.addApproach(name,comment, function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches();
            view.closeAddApproachDialog();
        });
    },
    handleProcessClick: function(id)
    {
        model.currentProcess = id;
        model.currentApproach = -1;
        model.partsOfVideo = [];
        view.selectProcess(id);
    },
    
    handleApproachClick: function(id, idProcess)
    {
        model.currentProcess = idProcess;
        model.currentApproach = id;
        model.partsOfVideo = [];
        view.selectApproach(id);
        
        model.loadVariants(id,function(answer)
        {
            view.setVariants(answer.variants);
            view.setVideo(answer.videoFilename);
        });
    },
    
    handlePlayClick:function()
    {
         view.playPauseVideo(model);
    },
    
    showEditDilog: function()
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
                view.showAddProcessDialog(response[0].processesname, response[0].processescomment);
            });
        }
    },
    
    handleEditApproach: function(name, comment)
    {
        model.updateApproach(name,comment,function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches();
            view.closeAddApproachDialog();
        });
    },
    
    handleEditProcess: function(name, comment)
    {
        model.updateProcess(name,comment,function(response)
        {
            view.showAlertMessage(response.success);
            view.updateProcessesAndApproaches();
            view.closeAddProcessDialog();
        });
    },
    
    handleBackward: function()
    {
         view.setVideoCurrent(-2);
    },
 
    handleForward: function()
    {
         view.setVideoCurrent(2);
    },
    handleSpeed: function(speed,id)
    {
        view.setSpeedVideo(speed);
        view.pressSpeedButton(id);
    },
    handleUpploadFile: function()
    {
        if (model.currentApproach==-1)
        {
            return;
        }
        view.clickOnUploadFile();
    },
    handleFileSelected: function()
    {
        view.submitUploadingFile(model.currentApproach);
    }
    
}

window.onload = controller.handleOnload(view);



/*var isPlay = false;
var processSelected = -1;
var approachSelected = -1;

var beginOfPartVideo = 0;

window.onload = function()
{
    updateProcessTree();
}

function onAddingProcessClick()
{
    document.getElementById("okProcess").setAttribute('onclick','onAddingProcess()');
    onOpenDialog("addingProcessDiv");
}

function onAddingApproachClick()
{
    if (processSelected!=-1)
    {
           document.getElementById("okApproach").setAttribute('onclick','onAddingApproach()');
            onOpenDialog("addingApproachDiv");
    }
}

function onEditProcessClick()
{
    if (processSelected!=-1 && approachSelected==-1)
    {
        document.getElementById("okProcess").setAttribute('onclick','onEditProcess()');
        getAjaxData("api.php?action=getProcess&id="+processSelected.replace("process",""),null,  function(response)
        {
            console.log(response);
            var responseObject = JSON.parse(response);
            document.getElementById("addingProcessInputName").value = responseObject[0].processesname;
            document.getElementById("addingProcessInputComment").value = responseObject[0].processescomment;
            onOpenDialog("addingProcessDiv");
        });
    }
    else if(processSelected!=-1 && approachSelected!=-1)
    {
        document.getElementById("okApproach").setAttribute('onclick','onEditApproach()');
        getAjaxData("api.php?action=getApproach&id="+approachSelected.replace("approach",""),null,  function(response)
        {
            console.log(response);
            var responseObject = JSON.parse(response);
            document.getElementById("addingApproachInputName").value = responseObject[0].approachname;
            document.getElementById("addingApproachInputComment").value = responseObject[0].approachcomment;
            onOpenDialog("addingApproachDiv");
        });
    }
 
}

function onAddingApproach()
{
    var name = document.getElementById("addingApproachInputName").value;
    var comment = document.getElementById("addingApproachInputComment").value;
    getAjaxData("api.php?action=addApproach", "name="+name+"&comment="+comment+"&idProcess="+processSelected.replace("process",""), function(response)
    {
        console.log(processSelected.replace("process",""));
        console.log(response);
        response = JSON.parse(response);
        if (response.success == 'ok')
        {
            alert("Успешно!");
        }
        else
        {
            alert("Произошла ошибка!");
        }
        onCloseDialog("addingApproachDiv");
        updateProcessTree();
    });
}

function onEditProcess()
{
    var name = document.getElementById("addingProcessInputName").value;
    var comment = document.getElementById("addingProcessInputComment").value;
    getAjaxData("api.php?action=updateProcess&id="+processSelected.replace("process",""),"name="+name+"&comment="+comment,  function(response)
        {
            console.log(response);
            response = JSON.parse(response);
            if (response.success == 'ok')
            {
                alert("Успешно!");
            }
            else
            {
                alert("Произошла ошибка!");
            }
            onCloseDialog("addingProcessDiv");
            updateProcessTree();
        });
}

function onEditApproach()
{
       var name = document.getElementById("addingApproachInputName").value;
    var comment = document.getElementById("addingApproachInputComment").value;
    getAjaxData("api.php?action=updateApproach&id="+approachSelected.replace("approach",""),"name="+name+"&comment="+comment,  function(response)
        {
            console.log(response);
            response = JSON.parse(response);
            if (response.success == 'ok')
            {
                alert("Успешно!");
            }
            else
            {
                alert("Произошла ошибка!");
            }
            onCloseDialog("addingApproachDiv");
            updateProcessTree();
        });
}

function onAddingProcess()
{
    var name = document.getElementById("addingProcessInputName").value;
    var comment = document.getElementById("addingProcessInputComment").value;
    getAjaxData("api.php?action=2", "name="+name+"&comment="+comment, function(response)
    {
        response = JSON.parse(response);
        if (response.success == 'ok')
        {
            alert("Успешно!");
        }
        else
        {
            alert("Произошла ошибка!");
        }
        onCloseDialog("addingProcessDiv");
        updateProcessTree();
    });
}

function updateProcessTree()
{

}



function onCloseDialog(id)
{
    document.getElementById(id).style.display = 'none';
    document.getElementById("blockerBackground").style.display = 'none';
}

function onPlayPause()
{	
}

function onForward()
{
	document.getElementById("videoField").currentTime+=2
}

function onBackward()
{
	document.getElementById("videoField").currentTime-=2;
}

function unPressAllSpeedButtons()
{
    document.getElementById("0125").setAttribute("pressed","");
    document.getElementById("025").setAttribute("pressed","");
    document.getElementById("1").setAttribute("pressed","");
    document.getElementById("2").setAttribute("pressed","");
}

function onSpeed(speed, id)
{
	document.getElementById("videoField").playbackRate = speed;
        unPressAllSpeedButtons();
        id.setAttribute("pressed","pressed");
}

function onUpploadFile()
{
    if (approachSelected==-1)
    {
        return;
    }
    document.getElementById('uploadFile').click();  
}

function onProcessesClick(id)
{
        document.getElementById('timesTable').innerHTML = "";
        var table = document.getElementById("processTableBody");
        var cells = table.getElementsByTagName("tr"); 
        for (var i = 0; i < cells.length; i++) 
        { 
           if (cells[i].className == "clickedProccessRow")
           {
                cells[i].className = "process";
           }
           if (cells[i].className.indexOf("clickedApproachRow")!=-1)
           {
               cells[i].className = cells[i].className.replace("clickedApproachRow","");
               cells[i].className += " approach";
           }
           if(cells[i].className == "clickedOperationRow")
           {
               cells[i].className = "operation";
           }

        }
        if (document.getElementById(id).className.indexOf("approach") !=-1)
        {
            document.getElementById(id).className = document.getElementById(id).className.replace("approach","");
            document.getElementById(id).className += " clickedApproachRow";
            approachSelected = id;
            unPressAllSpeedButtons();
            onSpeed(1,document.getElementById("1"));
            document.getElementById("actionsTableBody").innerHTML = "";
            document.getElementById("videoField").setAttribute('src', "");
            getAjaxData("api.php?action=1","approachId="+id.replace("approach",""), function(responseText)
            {
                if (responseText=="")
                {
                    return;
                }
                var response = JSON.parse(responseText);
                var innerHtml = "" ;
                console.log(responseText);
                for (var i in response.variants) 
                {
                    innerHtml+= "<tr id='operation"+response.variants[i].operationsid+"' onclick='onOperationsClick(this.id);' class='operation'>"
                    + " <td>"+response.variants[i].operationsname+"</td>"
                    + " <td>&nbsp;</td>"
                    + " <td>&nbsp;</td>"
                    + " <td>&nbsp;</td>"
                    + "<td>"+response.variants[i].operationsupdated+"</td>"
                    + " <td>&nbsp;</td>"
                    + "</tr>";
                }
                document.getElementById("videoField").setAttribute('src', response.videoFilename);
                document.getElementById("actionsTableBody").innerHTML = innerHtml;
            }
            );
            processSelected = document.getElementById(id).getAttribute('belong');
            approachSelected = id;
        }
        else if (document.getElementById(id).className == "process")
        {
            document.getElementById(id).className = "clickedProccessRow";
            document.getElementById("videoField").setAttribute('src', "");
            document.getElementById("actionsTableBody").innerHTML = "";
            processSelected = id;
            approachSelected = -1;
        }
}

function onFileSelected()
{
    document.getElementById('formUppload').setAttribute('action','api.php?action=4&approachId='+approachSelected.replace("approach",""));
    document.getElementById('formUppload').submit();
    
}

function onOperationsClick(id)
{
    var table = document.getElementById("actionsTableBody");
        var cells = table.getElementsByTagName("tr"); 
        for (var i = 0; i < cells.length; i++) 
        { 
           if(cells[i].className == "clickedOperationRow")
           {
               cells[i].className = "operation";
           }
        }
        
        if (document.getElementById(id).className == "operation")
        {
            document.getElementById(id).className = "clickedOperationRow";
            operationSelected = id;
            
        }
}



function onKeyDown(event)
{

}
*/