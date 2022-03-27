let numb = parseFloat(prompt('Moi nhap so'));
let all = 0;
// for (let i = 1; i <= numb; i++) {
//     all += i;
//     console.log(all);
// }
// console.log('Tong tu 1 den' + '' + numb + '' + 'la:' + '' + all);
while (numb < 0 || numb === NaN) {
    alert('Moi nhap lai')
    numb = parseFloat(prompt('Moi nhap so'));
}

let i = 1;

while (i <= numb) {
    all += i;
    i++;
}
console.log('Tong tu 1 den' + '' + numb + '' + 'la:' + '' + all);