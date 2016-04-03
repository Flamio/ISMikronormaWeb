
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
	document.getElementById("videoField").currentTime = document.getElementById("videoField").duration;
}

function onBackward()
{
	document.getElementById("videoField").currentTime = 0;
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