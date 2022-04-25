var mouseArray = [];
class Mouse {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    getStatus() {
        return this.status;
    }
    getSpeed() {
        if (this.getStatus() == true) {
            this.speed = this.speed;
        } else {
            this.speed = 0;
        }
        return this.speed;
    }
}
class Cat {
    constructor(name, weight, maxspeed, status) {
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed;
        this.status = status;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    getSpeed() {
        return this.speed;
    }
    getStatus() {
        return this.status;
    }
    setMouse(mouse) {
        this.mouse = mouse;
    }
    catchMouse() {
        if (this.maxspeed >= this.mouse.getSpeed()) {
            return true;
        } else {
            return false;
        }
    }
    eatMouse() {
        if (this.mouse.getStatus() == true && this.catchMouse() == true) {
            this.weight = this.weight + this.mouse.getWeight();
        } else {
            this.weight = this.weight;
        }
        return this.weight;
    }
}
let mouse1 = new Mouse('Jerry', 2, 4, false);
let cat = new Cat('Tom', 1.2, 3, true);
cat.setMouse(mouse1);
console.log(cat.catchMouse());
console.log(cat.eatMouse());