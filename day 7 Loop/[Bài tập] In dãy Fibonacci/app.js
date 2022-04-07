let inputNumb=parseFloat(prompt('Moi nhap so nguyen duong'));
let numb1 = 1;
let numb2 = 1;
let numbN;
while (inputNumb <= 0){
    alert('khong phai so duong, moi nhap lai');
    inputNumb = parseFloat(prompt('Moi nhap so nguyen duong'));
};

for (let i = 1; i <= inputNumb; i++) {
    if (i == 1) {
        console.log(numb1);
    } else if (i == 2) {
        console.log(numb2);
    } else {
        numbN = numb1 + numb2;
        numb1 = numb2;
        numb2 = numbN;
        console.log(numbN);
    }
}