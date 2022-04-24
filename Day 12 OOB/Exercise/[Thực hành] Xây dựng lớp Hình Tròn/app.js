class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    // getColor() {
    //     return this.color;
    // }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    drawn() {
        var myCanvas = document.getElementById('myCanvas');
        var ctx = myCanvas.getContext("2d");
        ctx.beginPath();
        var x = Math.floor(Math.random()*100);
        var y = Math.floor(Math.random()*100);
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var circle = new Circle(30, 'red');
let radius = circle.getRadius();
let Area = circle.getArea();
console.log(circle);
console.log(radius);
console.log(Area);
