let a = parseFloat(prompt('Moi nhap so a'));
let b = parseFloat(prompt('Moi nhap so b'));
let c = 0;

for (let i = 1; i > 0; i++) {
    c += a;
    a++;
    if (a > b) {
        break;
    }
}

alert('Tong cac so la'+ c);
