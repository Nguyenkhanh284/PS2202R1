var myCanvas = document.getElementById('myCanvas');
function getAround() {
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    var color = getRandomColor()
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var radius = Math.floor(Math.random() * 80);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
   var red = getRandomHex();
   var green = getRandomHex();
   var blue = getRandomHex();
	 return "rgb(" + red + "," + blue + "," + green +")";
}
function createMultipleCircle(){
    for(var i = 0; i < 300; i++){
        getAround();
}
}

createMultipleCircle();
