
var isPlay = false;

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