let inputNumber = parseFloat(prompt('nhap so'));;
let all = 0;
while (inputNumber !== -1) {
    inputNumber = parseFloat(prompt('nhap so'));
    alert('ban da nhap' + inputNumber);
    all += inputNumber;
    alert('Tong la' + all);
}