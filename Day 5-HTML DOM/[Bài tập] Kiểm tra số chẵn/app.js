function checkNumber() {
    var numberinput = document.getElementById('inputNumber').value;
    var number = parseFloat(numberinput);
    if (number%2==0) {
        alert(numberinput+' '+'la so chan')
    } else {
        alert(numberinput+' '+'la so le')
    }
}