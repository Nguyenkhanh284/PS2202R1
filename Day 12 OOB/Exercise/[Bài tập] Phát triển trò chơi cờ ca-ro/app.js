class Player {
    constructor(image) {
        this.image = image;
    }
    getImage() {
        return this.image;
    }
}
let player1 = new Player('O');
let player2 = new Player('X');
let count = 0;
var win = 0;
let arr = [];
function Boardcaro() {
    var caroBoard = document.getElementById('caroBoard');
    var board = '<table height=600px; width=600px; border="1px solid black"; position:absolute>';
    for (let i = 0; i < 20; i++) {
        board += '<tr>'
        for (let j = 0; j < 20; j++) {
            board += '<td class="btn" height=20px; width=20px>';
            board += '</td>';
        }
        board += '</tr>'
    }
    board += '</table>'
    caroBoard.innerHTML = board;
}
Boardcaro();
var btns = document.getElementsByClassName('btn');
function play() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            if (count % 2 == 0 && btns[i].innerHTML !== player2.getImage()) {
                btns[i].innerHTML = player1.getImage();
            } else if (count % 2 == 1 && btns[i].innerHTML !== player1.getImage()) {
                btns[i].innerHTML = player2.getImage();
            }
            count++;
            checkwin();
        })
    }
}
play();
function checkwin() {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerHTML !== '') {
            if (btns[i].innerHTML === btns[i + 1].innerHTML || btns[i].innerHTML === btns[i + 20].innerHTML) {
                win++;
            } else {
                win -= win;
            }
            if (win == 4) {
                alert(`The Team ${btns[i].innerHTML} win`)
            }
        }
    }
}

