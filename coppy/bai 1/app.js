const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
var box = 20;
var Snakebody = [[box, box * 2], [box, box * 3].[box, box * 4]];
class Snake {
    constructor() {

    }
    drawn() {
        for (let i = 0; i < Snakebody.length; i++) {
            ctx.fillStyle = (i == 0) ? 'red' : 'blue';
            ctx.fillRect(Snakebody[i][0], Snakebody[i][1], box, box);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(Snakebody[i][0], Snakebody[i][1], box, box);
        }
    }
}
let snake = new Snake();
snake.drawn();
