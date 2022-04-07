let a = parseFloat(prompt('Moi nhap so a'));
let numbers = [-3, 5, 1, 3, 2, 10];
var check = true;
while (isNaN(a)) {
    alert('Moi nhap lai');
    a = parseFloat(prompt('Moi nhap so a'));
}
console.log(a)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === a) {
        alert(`Find ${a} at position ${i} in Array`);
        check = false;
        break;
    }
}

if (check == true) {
    alert(`Dont find ${a}`);
};   
