var inputValue = document.getElementById('inputValue');
var result = document.getElementById('result');

function save() {
    var newStr = inputValue.value;
    return newStr;
}

function isPalindrome() {
    var myStr = save();
    var myArr = myStr.split("");
    var a = '';
    var b;
    for (let i = myArr.length - 1; i >= 0; i--) {
        a += myArr[i];
    }
    if (a === myStr) {
        b = 'Right';
        result.innerHTML = `${b} The Palindrome is ${a}`;
    } else {
        b = 'Wrong';
        result.innerHTML = `${b} Don't exist the Palindrome`
    }
}

