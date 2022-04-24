/**
 * Created by nhatnk on 4/26/17.
 */

var speedCar;
function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = parseFloat(prompt('Do you want speed'));


  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('qua phai: ' + this.left);
  }

}

var hero = new Hero('car.png', 10, 40, 100);

function start() {
  if (hero.left < window.innerWidth - hero.size && hero.left > 0) {
    hero.speed = hero.speed;
  } else {
    hero.speed = -hero.speed;
  }
  hero.moveRight();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}
start();