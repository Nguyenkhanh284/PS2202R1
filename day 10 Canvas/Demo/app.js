let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 50, 50, 0, 2*Math.PI);
ctx.stroke();