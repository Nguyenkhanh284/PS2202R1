let numbers = [-3, 5, 1, 3, 2, 10];
let numb = numbers[0];
let a;
for (let i = 0; i <= numbers.length; i++){
    if (numb < numbers[i]) {
       numb = numbers[i];
       a=i;
    }
}

document.write(`Max Number is ${numb} at postion ${a}`);