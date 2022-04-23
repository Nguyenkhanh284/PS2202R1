var numbInput;
var myArr = [];
var count = 0;
while (count <= 10) {
    numbInput= Math.floor(Math.random() * 99);
    myArr.push(numbInput);
    count++;
}
console.log(myArr);
var target = Math.floor(Math.random() * 99);
var newArr = [];
var first, second, result;
for (let i = 0; i < myArr.length; i++) {
    var check = false;
    first = myArr[i];
    result = target - first;
    for (let j = 0; j < myArr.length; j++) {
        if (result == myArr[j] && myArr[j] !== myArr[i]) {
            check = true;
            second = result;
        }
    }
    if (check) {
        document.write(`Hai so co tong bang ${target} la ${first} va ${second}`);
        document.write('</br>');
    }
}