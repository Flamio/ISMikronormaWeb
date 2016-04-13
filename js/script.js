
var isPlay = false;
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
        getAjaxData("api.php?action=3","", function(response)
        {
           var responseObject = JSON.parse(response);
           var innerHtml = "";
           var processIds =[];
           for(var i in responseObject)
           {
               if (processIds.indexOf(responseObject[i].processesid)==-1)
               {
                   innerHtml += "<tr id='process"+responseObject[i].processesid+"' onclick='onProcessesClick(this.id);return false;' class='process'>"
                    + " <td>"+responseObject[i].processesname+"</td>"
                    + "<td>"+responseObject[i].processescomment+"</td>"
                    + "<td>"+responseObject[i].processesupdated+"</td>"
                    + "</tr>";
                    processIds.push(responseObject[i].processesid);
                }   
                
               if (responseObject[i].approachid!=null)            
               {
                    innerHtml+="<tr id=approach'"+responseObject[i].approachid+"' onclick='onProcessesClick(this.id);return false;' class='approach' belong='"+responseObject[i].processesid+"'>"
                    + " <td>"+responseObject[i].approachname+"</td>"
                    + "<td>"+responseObject[i].approachcomment+"</td>"
                    + "<td>"+responseObject[i].approachupdated+"</td>"
                    + "</tr>";
               }
            
           }
           
           document.getElementById("processTableBody").innerHTML = innerHtml;
           
        });
}

function onOpenDialog(id)
{
    document.getElementById(id).style.display = 'block';
    document.getElementById("blockerBackground").style.display = 'block';
}

function onCloseDialog(id)
{
    document.getElementById(id).style.display = 'none';
    document.getElementById("blockerBackground").style.display = 'none';
}

function onPlayPause()
{	
    if (document.getElementById("videoField").getAttribute('src')=="")
    {
        return;
    }
	if (isPlay)
	{
		document.getElementById("videoField").pause();
		document.getElementById("playButton").setAttribute("src","img/play.png")
		isPlay = false; 
                var endOfPartVideo = document.getElementById("videoField").currentTime;
                document.getElementById("timesTable").innerHTML+=
                        "<tr><td>"+beginOfPartVideo.toFixed(3)+"-"+endOfPartVideo.toFixed(3)+"</td>\n\
        <td>"+(endOfPartVideo-beginOfPartVideo).toFixed(3)+"</td></tr>";
	}
	else
	{
		document.getElementById("videoField").play();
		document.getElementById("playButton").setAttribute("src","img/pause.png");
		isPlay = true;
                beginOfPartVideo = document.getElementById("videoField").currentTime;
	}
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

function getXmlHttp(){
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
}

function getAjaxData(url, request, onResponse)
{
    var req = getXmlHttp();
    req.onreadystatechange = function() 
    {
        if (req.readyState == 4) 
        {
            if(req.status == 200) 
            {
                if (onResponse!=undefined)
                {
                    onCloseDialog('load');
                    onResponse(req.responseText);
                }
            }
        }
    } 
    req.open('POST', url, true); 
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    req.send(request);
    onOpenDialog('load');
}

function onKeyDown(event)
{
    if (event.keyCode==32)
    {
        onPlayPause();
    }
    else 
    {
        return event.keyCode;
    }
}