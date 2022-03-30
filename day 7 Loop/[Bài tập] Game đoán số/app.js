let rightNumb = Math.round(Math.random()*99+1);
let min = 1;
let max = 100;
let count =0;
console.log(rightNumb);
let inputNumb;
function guessNumber() {
    do {
        inputNumb=parseFloat(prompt('Mời bạn đoán'));
        if (inputNumb<rightNumb&&inputNumb>=min){
            alert(`Bạn đoán sai rồi còn ${3-count} lượt`)
             min=inputNumb;
             alert(`Gợi ý: Số chính xác có thể nằm trong khoảng ${min} đến ${max}`);
        } else if (inputNumb>rightNumb&&inputNumb<=max){
            alert(`Bạn đoán sai rồi còn ${3-count} lượt`)
             max=inputNumb
             alert(`Gợi ý: Số chính xác có thể nằm trong khoảng ${min} đến ${max}`);
        } else {
            alert(`Bạn đã đoán đúng số chính xác là ${rightNumb}`);
        }
        count++;
    } while (inputNumb!==rightNumb);
    if(count==3){
      alert('Bạn đã hết lượt');
    }
}

