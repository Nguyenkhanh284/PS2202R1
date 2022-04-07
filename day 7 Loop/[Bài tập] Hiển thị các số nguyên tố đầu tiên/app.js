var n=2;
var count = 0;
var numbersInput;
do {
    numbersInput = parseFloat(prompt('Ban muon in bao nhieu so nguyen to dau tien'));
    if (!isNaN(numbersInput)) {
        break;
    } else {
        alert('Moi nhap lai');
    }
} while (isNaN(numbersInput));

// in ra n số nguyên tố
while(true){
    if (isNguyento(n)==true) {
        console.log(n);
        count++;
    }
    if(count==numbersInput) {
        break;
    }
    n++;
}
// hàm kiểm tra n là số nguyên tố hay không
function isNguyento(n) {
    var check = true;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n%i==0) {
            check=false;
            break;
        }
    }
    return check;
}

