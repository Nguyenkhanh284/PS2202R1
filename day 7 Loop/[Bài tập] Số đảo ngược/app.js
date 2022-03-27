let inputNumber = document.getElementById('inputNumber');
let saveNumb,val,a;
function saveNumber() {
    saveNumb = inputNumber.value;
    val = parseFloat(saveNumb);
}


for (let i = 1; i <= saveNumb.length ; i++) {
    a = (val-val%10)/10;
    console.log(a);
}