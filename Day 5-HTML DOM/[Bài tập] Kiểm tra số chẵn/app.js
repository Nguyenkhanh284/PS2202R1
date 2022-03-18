function checkNumber() {
    var number = document.getElementById('inputNumber').value;
    if (number%2==0) {
        alert(number+' '+'la so chan')
    } else {
        alert(number+' '+'la so le')
    }
}