class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius*this.radius * Math.PI;
    }
};
var circle = newCircle(3,'red');
let radius = circle.getRadius();
let Area = circle.getArea();
console.log(circle);
console.log(radius);
console.log(Area);
