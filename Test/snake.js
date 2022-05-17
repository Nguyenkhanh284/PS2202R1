var game = document.getElementById('game');
var ctx = game.getContext('2d');
var score = document.getElementById('score');
var moveX = 1;
var moveY = 0;
var isGameOver = false;
var positionFoodX = 100;
var positionFoodY = 100;
var positionX = 20;
var positionY = 20;
var count = 0;
var snakeBody = [];
class Snake {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawn() {
        // make head
        ctx.clearRect(positionX, positionY, this.width, this.height);
        positionX += moveX * 20;
        positionY += moveY * 20;
        ctx.fillStyle = this.color;
        ctx.fillRect(positionX, positionY, this.width, this.height);
        // make body
        ctx.fillStyle = 'green';
        if (snakeBody.length >= 1) {
            for (let i = 1; i < snakeBody.length; i++) {
                ctx.fillRect(snakeBody[i][0], snakeBody[i][1], this.width, this.height)
            }
        }
    }
}
class Food {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawn() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(positionFoodX, positionFoodY, this.width, this.height);
    }
}
// Creat a snake
let snake = new Snake(20, 20, 'red');
let food = new Food(20, 20, 'blue');
// Remote snake
function moveSnake(event) {
    if (event.code == 'ArrowLeft') {
        moveX = -1;
        moveY = 0;
    } else if (event.code == 'ArrowDown') {
        moveX = 0;
        moveY = 1;
    } else if (event.code == 'ArrowRight') {
        moveX = 1;
        moveY = 0;
    } else if (event.code == 'ArrowUp') {
        moveX = 0;
        moveY = -1;
    }
}
// Tao thuc an
function makeFood() {
    updatePositionFood();
    food.drawn();
}
// Update vi tri hien tai cua ran 
function updatePositionSnake() {
    positionX += moveX * 20;
    positionY += moveY * 20;
}
// Check gameOver
function gameOver() {
    if (positionX < 0 || positionX + snake.width > 500 || positionY < 0 || positionY + snake.height > 500) {
        isGameOver = true;
        return isGameOver;
    }
}
// Xet vi tri cua food
function updatePositionFood() {
    positionFoodX = Math.floor(Math.random() * 25) * 20;
    positionFoodY = Math.floor(Math.random() * 25) * 20;
}
// Xet va cham
function isColiison() {
    if (Math.abs((positionX + snake.width / 2) - (positionFoodX + food.width / 2)) < Math.abs((snake.width + food.width) / 2) &&
        Math.abs((positionY + snake.height / 2) - (positionFoodY + food.height / 2)) < Math.abs((snake.height + food.height) / 2)
    ) {
        snakeBody.push([positionFoodX, positionFoodY]);
        count += 1;
        score.innerHTML = count;
        makeFood();
    }
}
// Choi game
function play() {
    gameOver();
    if (isGameOver == false) {
        document.addEventListener("keydown", moveSnake);
        snake.drawn();
        food.drawn();
        isColiison();
    } else {
        // alert(`You loose and your score is ${count}`);
    }
}
setInterval(play, 200)

