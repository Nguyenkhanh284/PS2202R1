var input = prompt('Mời nhập ký tự');
function check(str) {
    var numb = parseFloat(str);
    var result;
    if (isNaN(numb)) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

var a = check(input);
alert(a);