var inputNumb=prompt('Input Number please');
var checkInputNumb = parseFloat(inputNumb);
while (isNaN(checkInputNumb)) {
    alert('Wrong, You can just input Number');
    inputNumb=prompt('Input Number please');
}
var yourArray = inputNumb.split("");
var a;
var newArray=[];
for (let i = 0; i < yourArray.length; i++) {
    yourArray[i]=parseFloat(yourArray[i]);
    newArray.push(yourArray[i]);
}

console.log(newArray);

for (let i = 1; i <= newArray.length; i++) {
    if(newArray[i-1]%2==0&&newArray[i]%2==0) {
        newArray[i]=newArray[i].toString();
        newArray[i-1]=newArray[i-1].toString();
        newArray[i-1]+='-';
    }
}

document.write(newArray.join(""));