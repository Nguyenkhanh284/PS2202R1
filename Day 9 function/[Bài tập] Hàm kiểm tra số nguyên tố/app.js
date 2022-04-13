var inputNumb = document.getElementById('inputNumb');
var result = document.getElementById('result');

function checkNumb(number) {
    var check;
    if (number < 2) {
        check = false;
    }
    if (number == 2) {
        check = true;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            check = false;
            break;
        } else {
            check = true;
        }
    }
    return check;
}

function saveNumb() {
    var numb = inputNumb.value;
    var a = checkNumb(numb);
    console.log(a);
    var b = ''
    if (a) {
        b += `${numb} la so nguyen to`
    } else {
        b += `${numb} khong la so nguyen to`
    }
    result.innerHTML = b;
}