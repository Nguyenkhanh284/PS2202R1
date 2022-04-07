var saveNumb = [];
var Numb = document.getElementById('InputNumb');
var result = document.getElementById('result');
var InputNumb;
function saveNumber() {
    InputNumb = Numb.value;
}

function pushNumbber() {
    saveNumb.push(InputNumb);
    Numb.value = '';
    alert(`You add ${InputNumb} in Array`)
    console.log(saveNumb);
}

function display() {
    var str = '';
    for (let i = 0; i < saveNumb.length; i++) {
        str += '<p> Elemnet' + ' ' + (i+1) + ' ' + 'is' + ' ' + saveNumb[i] + '</p>';
    }
    result.innerHTML = str;
}