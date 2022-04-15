var a = parseFloat(prompt('Input Number A'));
var b = parseFloat(prompt('Input Number B'));

function check(number1, number2) {
    if (number1 > number2) {
        alert('Ok, You');
    } else {
        var a = number1 + number2;
        alert(`Result is ${a}`);
    }
}

check(a, b);