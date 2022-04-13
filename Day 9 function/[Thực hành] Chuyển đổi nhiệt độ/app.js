var input = document.getElementById('input');
var result = document.getElementById('result');
function change() {
    var F = input.value;
    var C = (F - 32) / 1.8;
    result.innerHTML = C;
}