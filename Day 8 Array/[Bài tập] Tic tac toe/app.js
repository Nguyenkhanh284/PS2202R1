var caroBoard = document.getElementById('caroBoard');
var inputRow = document.getElementById('inputRow');
var inputCol = document.getElementById('inputCol');
var row, col;
var count = 0;
var yourArray = [];
function saveRow() {
    row = inputRow.value;
    console.log(row);
}
function saveCol() {
    col = inputCol.value;
    console.log(col);
}

// Tao ban co caro
for (let i = 0; i < 10; i++) {
    var arrayBig = [];
    for (let j = 0; j < 10; j++) {
        arrayBig.push('*');
    }
    yourArray.push(arrayBig);
}

function display(arr) {
    var caro = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            caro += arr[i][j] + '&nbsp&nbsp&nbsp';
        }
        caro += '<br/>';
    }
    caroBoard.innerHTML = caro;
}
display(yourArray);


// Choi co caro
function play() {
    var input;
    var value;
    if (count % 2 == 0) {
        value = 'X';
    } else if (count % 2 !== 0) {
        value = 'O';
    }
    input = prompt(`Moi nhap ${value}`);
    saveRow();
    saveCol();
    i = row - 1;
    j = col - 1;
    yourArray[i][j] = input;
    display(yourArray);
    count++;
}

if ((yourArray[i][j]==yourArray[i+1][j]&&yourArray[i+1][j]==yourArray[i+2][j])||(yourArray[i][j]==yourArray[i][j+1]&&yourArray[i][j+1]==yourArray[i][j+2])){
    alert('You win');
}
