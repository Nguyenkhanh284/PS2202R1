var caroGame = document.getElementById('caroGame');
var boardCaro = [];
for (let i = 0; i < 5; i++) {
    var a = [];
    for (let j = 0; j < 5; j++) {
        a.push(0);
    }
    boardCaro.push(a);
}
console.log(boardCaro);


function display(arr) {
    var displayContent = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            displayContent+=arr[i][j]+'&nbsp&nbsp&nbsp';
        }
        displayContent+="<br/>";
    }
    caroGame.innerHTML=displayContent;
}

display(boardCaro);
function changeValue() {
    var a = parseFloat(prompt('nhap dong'));
    var b = parseFloat(prompt('nhap cot'));
    var i=a-1;
    var j=b-1;
    var value = prompt('nhap gia tri');
    boardCaro[i][j]=value;
    display(boardCaro);
}

