var inputNumber = parseInt(prompt('Mời nhập số nguyên'));
function check(number) {
    var result;
    if (number > 0) {
        result = true;
    } else {
        result = false
    }
    return result;
}
var a = check(inputNumber);
alert(a);