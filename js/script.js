
var isPlay = false;
var processSelcted = -1;
var operatonSelected = -1;

var beginOfPartVideo = 0;

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

function onProcessesClick(id)
{
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
            getAjaxData("index.php?action=1", id, "approach");
            processSelected = document.getElementById(id).className.replace("clickedApproachRow","").replace("belong","").trim();
        }
        else if (document.getElementById(id).className == "process")
        {
            document.getElementById(id).className = "clickedProccessRow";
            processSelected = id;
        }
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
            var videoFile =  document.getElementById(id).getElementsByTagName("input")[0].getAttribute('value');
            unPressAllSpeedButtons();
            onSpeed(1,document.getElementById("1"));
            document.getElementById("videoField").setAttribute('src', videoFile);
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

function getAjaxData(url, id, typeId)
{
    var req = getXmlHttp();
    req.onreadystatechange = function() 
    {
        if (req.readyState == 4) 
        {
            if(req.status == 200) 
            {
                document.getElementById("actionsTableBody").innerHTML = req.responseText;
            }
        }
    } 
    
    req.open('POST', url, true); 
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    var request = "approachId="+id.replace(typeId,"");
    req.send(request);    
}

function onKeyDown(event)
{
    if (event.keyCode==32)
    {
        onPlayPause();
    }
}