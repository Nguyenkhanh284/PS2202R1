var result = document.getElementById('result'); 
var numA = document.getElementById('numA');
var numB = document.getElementById('numB');

function add() {
    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    var add=a+b;
    result.innerText=add;
}

function sub() {
    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    var sub = a-b;
    result.innerHTML=sub;
}

function mul() {
    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    var mul = a*b;
    result.innerHTML=mul;
}

function div() {
    var a = parseFloat(numA.value);
    var b = parseFloat(numB.value);
    var divi = a/b;
    result.innerHTML= divi;
}