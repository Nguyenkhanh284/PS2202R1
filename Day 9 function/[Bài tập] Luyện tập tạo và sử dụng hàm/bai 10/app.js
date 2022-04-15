var str = 'Nguyen Quoc Khanh';
var myArr = str.split("");
console.log(myArr);
var input = prompt('Mời nhậP ký tự');
function check(string, arr) {
    var a;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == string) {
            a = i;
            break;
        } else {
            a = -1;
        }
    }
    return a;
}

var b = check(input, myArr);
if (b === -1) {
    alert(`Không tìm thấy kí tự ${input}`)
} else {
    alert(`Tìm thấy kí tự ${input} tại vị trí ${b}`);
}