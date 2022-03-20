var result = document.getElementById('result');
var btns = document.getElementsByClassName('btn');
for (let btn of btns) {
    btn.addEventListener('click', function () {
        result.innerHTML+=btn.value;
    })
}

function equal() {
    let res = result.innerHTML;
    let equal = eval(res);
    result.innerHTML=equal;
}


function clean () {
    result.innerHTML='0';
}

function undo () {
    let res = result.innerHTML;
    result.innerHTML=res.slice(0,-1);
}


