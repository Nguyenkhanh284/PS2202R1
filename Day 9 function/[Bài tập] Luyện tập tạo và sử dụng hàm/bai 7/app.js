var a = parseFloat(prompt('Mời nhập số a'));
var b = parseFloat(prompt('Mời nhập số b'));
var c = parseFloat(prompt('Mời nhập số c'));
var arr = [];
function save(numb) {
    arr.push(numb);
    return arr;
}
function check(numb1, numb2, numb3) {
    save(numb1);
    save(numb2);
    save(numb3);
    var min;
    for (let i = 0; i < arr.length; i++) {
        min = arr[0];
        if (arr[0] >= arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

var result = check(a,b,c);
alert(`Giá trị nhỏ nhất trong 3 số là ${result}`)