
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get heightValue() {
        return this.height;
    }
    get widthValue() {
        return this.width;
    }
    set heightValue(height) {
        this.height = height;
    }
    set widthValue(width) {
        this.width = width;
    }
    drawn() {
        let myCanvas = document.getElementById('myCanvas');
        let ctx = myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(30, 30, this.width, this.height);
        ctx.strokeRect(30, 30, this.width, this.height);
        ctx.strokeStyle = 'blue';
    }
}
let myRectangle = new Rectangle(50, 100);
myRectangle.heightValue = parseFloat(prompt('Chieu rong can nhap la'));
myRectangle.widthValue = parseFloat(prompt('Chieu dai can nhap la'));
myRectangle.drawn();