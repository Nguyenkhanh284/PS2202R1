var caroBoard = document.getElementById('caro_board');
var btns = document.getElementsByClassName('btn');
var board = '';
var inputValue;

function save(obj) {
    inputValue = obj.value;
    console.log(inputValue);
}

function play() {
    var board = '<table border="1px solid black">'
    for (let i = 0; i < 3; i++) {
        board += '<tr>';
        for (let j = 0; j < 3; j++) {
            board += '<td>';
            board += '<button type="button" class="btn"></button>';
            board += '</td>';
        }
        board += '</tr>'
    }
    board += '<table></table>';
    caroBoard.innerHTML = board;
    var count = 0;
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function value() {
            count++;
            var value;
            if (count % 2 == 0) {
                value = "x";
            } else {
                value = "O";
            }
            btns[i].innerHTML = value;
            if (count == 10) {
                alert('You loose');
            }
        });
    }
}

