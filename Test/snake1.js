var game = document.getElementById('game');
var ctx = game.getContext('2d');
class Snake {
    constructor(size) {
        this.head = Vector(0, 0);
        this.size = size;
        this.vel = Vector(0, 0);
    }
    draw() {
        ctx.beginPath();
        ctx.filStyle = 'red';
        ctx.fillRect(this.head.x, this.head.y, this.size, this.size);
    }
    updatePosition(){
        this.head.x += this.vel.x * this.size;
        this.head.y += this.vel.y * this.size;
  
        this.head.x = (this.head.x + 500) % 500;
        this.head.y = (this.head.y + 500) % 500;
     }
}
let snake=new Snake(20);
snake.draw()
function setup() {
    snake = new Snake(20);
}

function makeSnake() {
    drawSnake();
}

function drawSnake() {
    snake.updatePosition();
    snake.draw();
}
function moveSnake(event) {
    if (event.code == 'ArrowLeft') {
        snake.vel.x = -1;
        snake.vel.y = 0;
    } else if (event.code == 'ArrowDown') {
        snake.vel.x = 0;
        snake.vel.y = 1;
    } else if (event.code == 'ArrowRight') {
        snake.vel.x = 1;
        snake.vel.y = 0;
    } else if (event.code == 'ArrowUp') {
        snake.vel.x = 0;
        snake.vel.y= -1;
    }
}