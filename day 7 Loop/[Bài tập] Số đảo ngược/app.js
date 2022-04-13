var inputNumber = document.getElementById('inputNumber');
var result = document.getElementById('result');
var saveNumb,val,a,b;
var c = '';
function saveNumber(){
    saveNumb = inputNumber.value;
    val = parseFloat(saveNumb);
    console.log(val);
}

function changeNumber() {
    for (let i = 1; i <= saveNumb.length ; i++) {
        a = val%10;
        val=(val-a)/10;
        b=a.toString();
        c+=b;
    }
    result.innerText = c;
}


