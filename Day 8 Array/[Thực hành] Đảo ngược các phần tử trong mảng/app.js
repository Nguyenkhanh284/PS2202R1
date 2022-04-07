var InputNumber = document.getElementById('InputNumber');
var oldResult = document.getElementById('result1');
var newResult = document.getElementById('result2');
var arrayNumb1 = [];

var savenumb;

function addNumb() {
    arrayNumb1.push(parseFloat(InputNumber.value));
    oldResult.innerHTML = arrayNumb1.join(' ');
    InputNumber.value = '';
}

function changeArray() {
    var arrayNumb2 = [];
    for (let i = arrayNumb1.length; i >= 0; i--) {
        savenumb = arrayNumb1[i - 1];
        arrayNumb2.push(savenumb);
        console.log[arrayNumb2];
    }
    newResult.innerHTML=arrayNumb2.join(' ');
}