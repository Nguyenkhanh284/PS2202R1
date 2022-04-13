var inputFoot = document.getElementById('inputFoot');
var inputMet = document.getElementById('inputMet');
var reslut1 = document.getElementById('result1');
var reslut2 = document.getElementById('result2');

function save(input) {
    var a = input.value;
    return a;
}


function getFoottoMet() {
    var a = save(inputFoot);
    var Met = a * 0.305;
    reslut1.innerHTML = Met;
}

function getMettoFoot() {
    var a = save(inputMet);
    var Foot = a * 3.279;
    reslut2.innerHTML = Foot;
}