/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var view = 
{
    model:null,
    
    setActualValueInAddingOperationDialog: function(value)
    {
        document.getElementById('operationActualValue').value = value;
    },
    
    generateDirectoryChilds: function(directoriesNodes)
    {
        var innerHtml = "";
        for (var i in directoriesNodes.nodes)
        {
            console.log(directoriesNodes.nodes[i]);
            innerHtml += "<ul class='directoryNode' id='"+directoriesNodes.nodes[i].Id+
            "' onclick='controller.handleDirectoryNodeClick(event.target.id); return false;'><img src='img/directoryFolder.png'></img>"
            +directoriesNodes.nodes[i].Name+"<childs></childs></ul>";
        }
        
        for (var j in directoriesNodes.values)
        {
            console.log(directoriesNodes.values[j]);
            innerHtml += "<li onclick='controller.handleOnValueClick(model, view,"
            +directoriesNodes.values[j].Value+","
            +directoriesNodes.values[j].Id+")' selected='false' class = 'directoryValue'><img src='img/directoryValue.png'></img>"
            +directoriesNodes.values[j].Name+" "+directoriesNodes.values[j].Value+"</li>";
        }
        innerHtml+= "";
        return innerHtml;
    },
    
    setDirectoryList: function(directoriesNodes)
    {
        document.getElementById("directoriesTree").innerHTML= "<ul>"+this.generateDirectoryChilds(directoriesNodes)+"</ul>";
    },
    
    setDirectoryListInNode: function(nodeId,directoriesNodes)
    {
        console.log(nodeId);
        document.getElementById(nodeId) != null?document.getElementById(nodeId).getElementsByTagName('childs')[0].innerHTML = this.generateDirectoryChilds(directoriesNodes):"";
    },
    
    closeAddOperationDialog: function()
    {
        this.closeDialog('addingOperationDiv');
    },
    
    showAddOperationDialog: function()
    {
      this.openDialog('addingOperationDiv');
      model.cuurentSelectedDirectoryValue = -1;
    },
    
    setModel: function(model)
    {
        this.model = model;
    },
    setAllDirectoriesInAddProcessDialog: function(onDone)
    {
        this.model.getAllDirectories(function(response)
        {
            var innerHtml = '';
            for (var i = 0;i<response.length;i++)
            {
                innerHtml+= 
                        "<option value='"+response[i].Id+"'>"+response[i].Name+"</option>";
            }
            document.getElementById("directories").innerHTML = innerHtml;
            onDone();
        })
    },
    
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
        console.log(variants);
        for (var i in variants) 
                {
                    innerHtml+= "<tr id='operation"+variants[i].operationsid+"' onclick='' class='operation'>"
                    + " <td>"+variants[i].operationsname+"</td>"
                    + " <td>"+variants[i].operationscomment+"</td>"
                    + " <td>"+variants[i].operationscalcTime+"</td>"
                    + " <td>"+variants[i].operationsactualTime+"</td>"
                    + "<td>"+variants[i].operationsupdated+"</td>"
                    + " <td>"+variants[i].operationsposition+"</td>"
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
    showAddProcessDialog: function(name,comment, directory)
    {
        var openDialog = this.openDialog;
        this.setAllDirectoriesInAddProcessDialog(function()
        {
            name = name == null ? "" : name;
            comment = comment == null ? comment = "" : comment = comment;
            

            var onclick = "";
            if (name == "" && comment == "")
            {
                onclick = "controller.handleAddingProcess(model,view,document.getElementById('addingProcessInputName').value,document.getElementById('addingProcessInputComment').value, document.getElementById('directories').options[document.getElementById('directories').selectedIndex].value)";
            }
            else 
            {
                onclick = "controller.handleEditProcess(model,view,document.getElementById('addingProcessInputName').value,document.getElementById('addingProcessInputComment').value, document.getElementById('directories').options[document.getElementById('directories').selectedIndex].value)";
            }

            document.getElementById('okProcess').setAttribute('onclick',onclick);

            document.getElementById("addingProcessInputName").value = name;
            document.getElementById("addingProcessInputComment").value = comment;
            if (directory !=null)
            {
                document.getElementById("directories").value = directory;
            }
            openDialog('addingProcessDiv');     
        });
    },
    
    closeAddApproachDialog: function()
    {
        this.closeDialog('addingApproachDiv');
    },
    showAddApproachDialog: function(name,comment,directory)
    {

            console.log(name);
            console.log(comment);
            name = name == null ? "" : name;
            comment = comment == null ? comment = "" : comment = comment;
            var onclick = "";
            if (name == "" && comment == "")
            {
                onclick = "controller.handleAddingApproach(model,view,document.getElementById('addingApproachInputName').value,document.getElementById('addingApproachInputComment').value)";
            }
            else 
            {
                onclick = "controller.handleEditApproach(model,view,document.getElementById('addingApproachInputName').value,document.getElementById('addingApproachInputComment').value)";
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
    
    updateProcessesAndApproaches: function(model)
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
            innerHtml+="<tr id=times"+i+" class='timesItem' ondblclick='controller.handleTimeDblClick(view,model,"+i+");return false'><td>"+model.partsOfVideo[i].begin.toFixed(3)+"-"+model.partsOfVideo[i].end.toFixed(3)+"</td>\n\
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