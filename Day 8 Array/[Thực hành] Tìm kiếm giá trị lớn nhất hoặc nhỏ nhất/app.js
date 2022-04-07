var arrayNumb = [];
var Numb, maxNumb, minNumb, minP, maxP;
for (let i = 0; i < 100; i++) {
    Numb = Math.floor(Math.random() * 101);
    arrayNumb.push(Numb);
}
console.log(arrayNumb);

function findMinNumb() {
    var number = arrayNumb[0];
    var a
    for (let i = 0; i < arrayNumb.length; i++) {
        if (number > arrayNumb[i]) {
            number = arrayNumb[i];
            a = i;
        }
    }
    minNumb = number;
    minP = a;
}
findMinNumb();
document.write(`Min Number in Array is ${minNumb} at position ${minP}`)
function findMaxNumb() {
    var number = arrayNumb[0];
    var a
    for (let i = 0; i < arrayNumb.length; i++) {
        if (number < arrayNumb[i]) {
            number = arrayNumb[i];
            a = i;
        }
    }
    maxNumb = number;
    maxP = a;
}
findMaxNumb()
document.write("<br/>")
document.write(`Max Number in Array is ${maxNumb} at position ${maxP}`)

