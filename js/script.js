
var isPlay = false;
var processSelcted = -1;

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

function onSpeed(speed)
{
	document.getElementById("videoField").playbackRate = speed;
}

function onProcessClick(id)
{
        var table = document.getElementById("processTableBody");
        var cells = table.getElementsByTagName("tr"); 
        for (var i = 0; i < cells.length; i++) 
        { 
           if (cells[i].className == "clickedProccessRow")
           {
                cells[i].className = "process";
           }
           if (cells[i].className == "clickedApproachRow")
           {
               cells[i].className = "approach";
           }

        }
        if (document.getElementById(id).className == "approach")
        {
            document.getElementById(id).className = "clickedApproachRow";
        }
        else
        {
            document.getElementById(id).className = "clickedProccessRow";
            processSelected = id;
        }
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
