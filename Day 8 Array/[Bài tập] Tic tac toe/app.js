var caroBoard = document.getElementById('caro_board');
var btns = document.getElementsByClassName('btn');
var inputValue = document.getElementsByClassName('valueInput');
var valueInput;
var first, second;

for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].addEventListener('change', function save() {
        valueInput = inputValue[i].value;
        if (valueInput == 'X') {
            first = valueInput;
            second = 'O';
        }
        if (valueInput == 'O') {
            first = valueInput;
            second = 'X';
        }

    })
}


function play() {
    board = '<table border="1px solid black">'
    for (let i = 0; i < 3; i++) {
        board += '<tr>';
        for (let j = 0; j < 3; j++) {
            board += '<td>';
            board += '<button type="button" class="btn"></button>';
            board += '</td>';
        }
        board += '</tr>'
    }
    board += '</table>';
    caroBoard.innerHTML = board;
    game();
}
function game() {
    var count = 0;
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function value() {
            checkwin();
            var value;
            if (count % 2 == 0) {
                value = first;
            } else {
                value = second;
            }
            btns[i].innerHTML = value;
            if (count == 9) {
                alert('You loose');
            }
            count++;
        });
    }
}

function checkwin() {
    for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML !== '') {
        if (btns[i].innerHTML == btns[i + 1].innerHTML && btns[i + 1].innerHTML == btns[i + 2].innerHTML) {
            alert(`The team ${btns[i].innerHTML} win`);
            caroBoard.innerHTML='';
        } else if (btns[i].innerHTML == btns[i + 3].innerHTML && btns[i + 3].innerHTML == btns[i + 6].innerHTML) {
            alert(`The team ${btns[i].innerHTML} win`);
            caroBoard.innerHTML='';
        }   
    }
    }
}
