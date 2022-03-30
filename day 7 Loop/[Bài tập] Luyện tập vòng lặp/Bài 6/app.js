let count = 0;
let all = 0;
for (let i = 1; i >= 1 ; i++) {
    if(i%7==0){
        console.log(i);
        count++;
        all+=i;
    }
    if (count==30) {
        break;
    }
}

document.write(`Tổng của 30 số đầu tiên chia hết cho 7 là: ${all}`);