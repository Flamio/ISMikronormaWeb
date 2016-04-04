
var isPlay = false;
var processSelcted = -1;
var operatonSelected = -1;

function onPlayPause()
{	
	if (isPlay)
	{
		document.getElementById("videoField").pause();
		document.getElementById("playButton").setAttribute("src","img/play.png")
		isPlay = false;
	}
	else
	{
		document.getElementById("videoField").play();
		document.getElementById("playButton").setAttribute("src","img/pause.png");
		isPlay = true;
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

// javascript-код голосования из примера
/*02
function vote() {
03
    // (1) создать объект для запроса к серверу
04
    var req = getXmlHttp() 
05
        
06
        // (2)
07
    // span рядом с кнопкой
08
    // в нем будем отображать ход выполнения
09
    var statusElem = document.getElementById('vote_status')
10
     
11
    req.onreadystatechange = function() { 
12
        // onreadystatechange активируется при получении ответа сервера
13
 
14
        if (req.readyState == 4) {
15
            // если запрос закончил выполняться
16
 
17
            statusElem.innerHTML = req.statusText // показать статус (Not Found, ОК..)
18
 
19
            if(req.status == 200) {
20
                 // если статус 200 (ОК) - выдать ответ пользователю
21
                alert("Ответ сервера: "+req.responseText);
22
            }
23
            // тут можно добавить else с обработкой ошибок запроса
24
        }
25
 
26
    }
27
 
28
       // (3) задать адрес подключения
29
    req.open('GET', '/ajax_intro/vote.php', true); 
30
 
31
    // объект запроса подготовлен: указан адрес и создана функция onreadystatechange
32
    // для обработки ответа сервера
33
      
34
        // (4)
35
    req.send(null);  // отослать запрос
36
   
37
        // (5)
38
    statusElem.innerHTML = 'Ожидаю ответа сервера...'*/
