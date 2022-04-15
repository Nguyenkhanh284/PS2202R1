var inputNumb;
var count = 0;
var arr = [];
var yourArr;
function save(number) {
    arr.push(number)
    return arr;
}
while (count < 5) {
    inputNumb = parseFloat(prompt('Mời nhập số'));
    var yourArr = save(inputNumb);
    count++;
}
document.write(`Old Array is ${yourArr}`)
document.write('</br>')

function reverse(arr) {
    var newArr = arr.reverse();
    return newArr;
}

var myArr = reverse(yourArr);

document.write(`New Array is ${myArr}`);
