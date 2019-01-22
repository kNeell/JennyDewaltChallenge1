var heartRain = document.getElementById("heartRain");
var heartDrop = document.getElementById("heartDrop");
var rain = document.getElementById("rain");
var startPos = -300
var heartStartXPos, heartStartYPos;


rain.addEventListener("click",heartRainDown, 33);

function heartRainDown(){
	setInterval(33)
}

function leafMove(){
	startPos += .5;
	heartRain.style.top = String(startPos*3) + "px";

}



document.addEventListener("click",dropHeart)

function dropHeart(event){
	heartDrop
	heartStartYPos = event.clientY;
		heartDrop.style.bottom = event.clientX + "px"
		heartDrop.style.bottom = event.clientY + "px"
	setInterval(function(){
		heartStartYPos+=10;
		heartDrop.style.bottom = heartStartYPos + "px";
	}, 33);
}


