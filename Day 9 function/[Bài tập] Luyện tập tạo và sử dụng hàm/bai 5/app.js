var Numb = parseFloat(prompt('Mời nhập số'));
function result(number) {
    var all = 1;
    for (let i = 1; i <= number; i++) {
        all *= i;
    }
    return all;
}

var giaithua = result(Numb);
document.write(`Giai thừa của ${Numb} là ${giaithua}`);