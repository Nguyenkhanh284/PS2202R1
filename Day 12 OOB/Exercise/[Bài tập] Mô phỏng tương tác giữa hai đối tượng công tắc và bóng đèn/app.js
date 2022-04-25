// Công tắc
class switchButton {
    constructor() {
        this.status = false;
    }
    connectToLamp() {
        if (this.status == true) {
            return true;
        } else {
            return false;
        }
    }
    swicthOn() {
        this.status = true;
        return true;
    }
    swicthOff() {
        this.status = false;
        return false;
    }
}

// Bóng đèn
class ElectricLamp {
    constructor() {
        this.status = false;
    }
    setButton(mySwitchButton) {
        this.mySwitchButton = mySwitchButton;
    }
    turnOn() {
        if (this.mySwitchButton.connectToLamp() == true) {
            return this.status = true;
        }
    }
    turnOff() {
        if (this.mySwitchButton.connectToLamp() == false) {
            return this.status = false;
        }
    }
}

let mySwitchButton = new switchButton();
let myLamp = new ElectricLamp();
document.write(`Công tắc ${mySwitchButton.swicthOff()}`);
document.write('</br>')
document.write(`Trạng thái kết nối ${mySwitchButton.connectToLamp()}`);
// Lấy năng lượng từ công tắc vào bóng đèn
myLamp.setButton(mySwitchButton);
var statusLamp;
if(mySwitchButton.connectToLamp()==true){
    statusLamp=myLamp.turnOn();
}else{
    statusLamp=myLamp.turnOff()
}
document.write('</br>')
document.write(`Bóng đèn ${statusLamp}`);
