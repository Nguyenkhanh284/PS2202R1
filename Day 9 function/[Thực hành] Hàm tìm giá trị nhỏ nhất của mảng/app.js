var arr1 = [3, 5, 1, 8, -3, 7, 8];
var arr2 = [7, 12, 6, 9, 20, 56, 89];
var arr3 = [];
var arr4 = [0, 0, 0, 0, 0, 0];

function checkMinArray(arr) {
    var minValue = arr[0];
    if (arr.length == 0) {
        minValue = -1;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[0]) {
                minValue = arr[i];
            }
        }
    }
    return minValue;
}

console.log(checkMinArray(arr1));
console.log(checkMinArray(arr2));
console.log(checkMinArray(arr3));
console.log(checkMinArray(arr4));