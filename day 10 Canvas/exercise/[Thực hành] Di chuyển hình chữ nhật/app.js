var myCanvas = document.getElementById('myCanvas');
var gameContext = myCanvas.getContext("2d");
let y = 0;
let x = 1;
function getHex() {
    return Math.floor(Math.random() * 255);
}
function colorRect() {
    var red = getHex();
    var green = getHex();
    var blue = getHex();
    return `rgb(${red}, ${green},${blue})`;
}
function moveRect() {
    gameContext.clearRect(20, y, 150, 100);
    if (y > 500) {
        x = -1;
    }
    if (y <= 0) {
        x = 1;
    }
    y += x;
    var color = colorRect();
    gameContext.beginPath();
    gameContext.fillStyle = color;
    gameContext.fillRect(20, y, 150, 100);
    console.log(y);
}
setInterval(moveRect, 10);

