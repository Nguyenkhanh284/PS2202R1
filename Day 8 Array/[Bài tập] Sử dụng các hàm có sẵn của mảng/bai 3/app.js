var yourInput = prompt('Input, please');
var yourArray = yourInput.split("");
var newArray = [];
console.log(yourArray);
for (let i = 0; i < yourArray.length; i++) {
    if (yourArray[i] == yourArray[i].toUpperCase()) {
        yourArray[i] = yourArray[i].toLowerCase();
    } else {
        yourArray[i] = yourArray[i].toUpperCase();
    }
    console.log(yourArray[i]);
}
console.log(yourArray.join(""));