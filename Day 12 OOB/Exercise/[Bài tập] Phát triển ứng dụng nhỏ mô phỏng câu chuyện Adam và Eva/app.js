class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    decrease() {
        if (this.weight > 0) {
            this.weight=this.weight-1;
        } else {
            this.weight=0;
        }
        return this.weight;
    }
    isEmpty() {
        if (this.weight == 0) {
            return true;
        } else {
            return false;
        }
    }
}


class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toTalk() {
        var man;
        if(this.name=='Adam'){
            man = 'Anh'
        } else {
            man='Em'
        }
        var say = `${man} cắn miếng`;
        return say;
    }
    // Lien quan den tao
    checkApple(){
        return this.apple.isEmpty();
    }
    setApple(apple){
        this.apple=apple;
    }
    getAppleInf(){
        return this.apple.getWeight();
    }
    toEatApple(){
        return this.weight=this.weight+1;
    }
}
let apple = new Apple(10);
console.log(apple);
let Adam = new Human('Adam', true, 80);
let Eva = new Human('Eva', true, 60);
Adam.setApple(apple);
Adam.getAppleInf();
Eva.setApple(apple);
Eva.getAppleInf();
document.write('MỘT VÒNG TRÁI TÁO');
document.write('</br>'); 
for (let i = 0; i < 10/2; i++) {
    document.write(`${Adam.getName()} say "${Adam.toTalk()}"`);
    document.write('</br>');
    document.write(`The weight of the apple is ${apple.decrease()} kg and the weight of ${Adam.getName()} is ${Adam.toEatApple()} kg`);
    document.write('</br>');
    document.write(`${Eva.getName()} say "${Eva.toTalk()}"`);
    document.write('</br>');
    document.write(`The weight of the apple is ${apple.decrease()} kg and the weight of ${Eva.getName()} is ${Eva.toEatApple()} kg`);
    document.write('</br>');    
}

if(apple.isEmpty()==true){
    document.write(`${Adam.getName()} and ${Eva.getName()} have eatten one apple`);
}
