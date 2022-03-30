var n = 2;
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

for (n = 2; n > 0; n++) {
    if (n == 2 || n == 3) {
        count++;
        console.log(n);
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                break;
            }
            console.log(n);
            count++;
        }
    }
    if (count == numbersInput) {
        break;
    }
}
