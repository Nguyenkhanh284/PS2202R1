class Temperature {
    constructor(value) {
        this.value = value;
    }
    get valueCelcius() {
        return this.value;
    }
    set valueCelcius(value) {
        while (value < -237) {
            alert('Ban da nhap sai xin moi nhap lai');
            value = parseFloat(prompt('Gia trij do C muon chuyen doi la'));
        }
        this.value = value;
    }
    convertFarenheit() {
        return (this.value * 9 / 5) + 32;
    }
    convertKelvin() {
        return this.value + 237.15;
    }
}

let myTemp = new Temperature(10);
myTemp.valueCelcius = parseFloat(prompt('Gia trij do C muon chuyen doi la'));
document.write(`Ket qua tu do C sang do F la ${myTemp.convertFarenheit()}`);
document.write('</br>');
document.write(`Ket qua tu do C sang do K la ${myTemp.convertKelvin()}`);