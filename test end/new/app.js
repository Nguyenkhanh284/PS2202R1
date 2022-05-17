var colorGround = 'black';
var guide = document.getElementById('guide');
// Tạo bảng điểm;
var point = document.getElementById('point');
var pointctx = point.getContext('2d');
pointctx.fillStyle = 'pink';
pointctx.fillRect(0, 0, 500, 500);
pointctx.font = "30px Georgia";
pointctx.fillStyle = colorGround;
pointctx.fillText("Điểm", 100, 30);
// Tạo nền game
var game = document.getElementById('game');
var ctx = game.getContext('2d');
ctx.fillStyle = colorGround;
ctx.fillRect(0, 0, 500, 500);
// Tạo bảng hướng dẫn
var guideCtx = guide.getContext('2d');
guideCtx.fillStyle = 'pink';
guideCtx.fillRect(0, 0, 500, 500);
guideCtx.font = "30px Georgia";
guideCtx.fillStyle = colorGround;
guideCtx.fillText("Hướng dẫn", 180, 30);
// Các biến cần dùng
var myScore = document.getElementById('score');
var warningGame = document.getElementById('warning');
var snakeParts = [];
var isGameOver = false;
var score = 0;
// Âm thanh
var soundEatFood = document.getElementById('eatfood');
var soundGameOver = document.getElementById('gameover');
//  Lop Vector
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
//  Lop Ran
class Snake {
    constructor(size) {
        this.head = new Vector(20, 20);
        this.size = size;
        this.vel = new Vector(0, 0);
        this.length = 0;
    }
    getBody() {
        return this.body
    }
    draw() {
        // Tao dau ran
        ctx.clearRect(this.head.x, this.head.y, this.size, this.size);
        ctx.fillStyle = 'red'
        ctx.strokeStyle = colorGround;
        ctx.fillRect(this.head.x, this.head.y, this.size, this.size);
        ctx.strokeRect(this.head.x, this.head.y, this.size, this.size);
        // Tao than ran
        ctx.fillStyle = 'green';
        ctx.strokeStyle = colorGround;
        for (let i = 0; i < snakeParts.length; i++) {
            ctx.clearRect(snakeParts[i][0], snakeParts[i][1], this.size, this.size);
            ctx.fillRect(snakeParts[i][0], snakeParts[i][1], this.size, this.size);
            ctx.strokeRect(snakeParts[i][0], snakeParts[i][1], this.size, this.size);
        }
    }
    clear() {
        ctx.fillStyle = colorGround;
        ctx.fillRect(this.head.x, this.head.y, this.size, this.size);
        ctx.fillStyle = colorGround;
        for (let i = 0; i < snakeParts.length; i++) {
            ctx.fillRect(snakeParts[i][0], snakeParts[i][1], this.size, this.size);
            ctx.strokeRect(snakeParts[i][0], snakeParts[i][1], this.size, this.size);
        }
    }
    updatePosition() {
        snakeParts.push([this.head.x, this.head.y]);
        this.head.x += this.vel.x * this.size;
        this.head.y += this.vel.y * this.size;
        // this.head.x = (this.head.x + 500) % 500;
        // this.head.y = (this.head.y + 500) % 500;
        if (this.length < snakeParts.length) {
            snakeParts.shift();
        }
    }
    checkGameOver() {
        // Khi đầu và đuôi rắn chạm nhau
        for (let i = 0; i < snakeParts.length; i++) {
            if (snakeParts[i][0] == this.head.x && snakeParts[i][1] == this.head.y) {
                isGameOver = true;
            }
        }
        // Khi rắn chạm thành
        if (this.head.x < 0 || this.head.x + this.size > 500 || this.head.y < 0 || this.head.y + this.size > 500) {
            isGameOver = true;
        }
        return isGameOver;
    }
}
// Lop Thuc an
class Food {
    constructor(size) {
        this.size = size
        this.newFood();
    }
    newFood() {
        this.x = Math.floor(Math.random() * 500);
        this.y = Math.floor(Math.random() * 500);
        this.x = Math.floor(this.x / this.size) * this.size;
        this.y = Math.floor(this.y / this.size) * this.size;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
let snake = new Snake(20);
let food = new Food(20);
document.addEventListener("keydown", moveSnake);
function makeSnake() {
    if (snake.checkGameOver() == false) {
        snake.clear();
        snake.updatePosition();
        snake.draw();
        food.draw();
        if (snake.head.x === food.x && snake.head.y === food.y) {
            eatFood();
        }

    } else {
        soundGameOver.play();
        ctx.fillStyle = 'grey';
        ctx.fillRect(0, 0, 500, 500);
        ctx.fillStyle = 'black';
        ctx.font = "50px Georgia";
        ctx.fillText("Game Over!!!", 100, 250);
    }
}
setInterval(makeSnake, 100);
function eatFood() {
    soundEatFood.play();
    pointctx.fillStyle = 'pink';
    pointctx.font = "80px Georgia";
    pointctx.fillText(score, 120, 150);
    score += 1;
    snake.length++;
    food.newFood()
    pointctx.fillStyle = colorGround;
    pointctx.font = "80px Georgia";
    pointctx.strokeStyle = 'pink'
    pointctx.fillText(score, 120, 150);
    pointctx.strokeText(score, 120, 150);
}

function moveSnake(event) {
    if (event.code == 'ArrowLeft' && snake.vel.x !== 1) {
        snake.vel.x = -1;
        snake.vel.y = 0;
    } else if (event.code == 'ArrowDown' && snake.vel.y !== -1) {
        snake.vel.x = 0;
        snake.vel.y = 1;
    } else if (event.code == 'ArrowRight' && snake.vel.x !== -1) {
        snake.vel.x = 1;
        snake.vel.y = 0;
    } else if (event.code == 'ArrowUp' && snake.vel.y !== 1) {
        snake.vel.x = 0;
        snake.vel.y = -1;
    }
}

