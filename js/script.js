
var isPlay = false;
var processSelcted = -1;
var approachSelected = -1;

var beginOfPartVideo = 0;

function onAddingProcessClick()
{
    onOpenDialog("addingProcessDiv");
}

function onAddingProcess()
{
    var name = document.getElementById("addingProcessInputName").value;
    var comment = document.getElementById("addingProcessInputComment").value;
    getAjaxData("index.php?action=2", "name="+name+"&comment="+comment, function(response)
    {
        if (response == 'ok')
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
        getAjaxData("index.php?action=3","", function(response)
        {
           document.getElementById("processTableBody").innerHTML = response;
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
            getAjaxData("index.php?action=1","approachId="+id.replace("approach",""), function(responseText)
            {
                if (responseText=="")
                {
                    return;
                }
                var response = JSON.parse(responseText);
                var innerHtml = "" ;
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
            processSelected = document.getElementById(id).className.replace("clickedApproachRow","").replace("belong","").trim();
            approachSelected = id;
        }
        else if (document.getElementById(id).className == "process")
        {
            document.getElementById(id).className = "clickedProccessRow";
            document.getElementById("videoField").setAttribute('src', "");
            processSelected = id;
            approachSelected = -1;
        }
}

function onFileSelected()
{
    document.getElementById('formUppload').setAttribute('action','index.php?action=4&approachId='+approachSelected.replace("approach",""));
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
                    onResponse(req.responseText);
                    onCloseDialog('load');
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