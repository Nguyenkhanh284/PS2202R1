for (let i = 1; i <= 100; i++) {
    if (i%3==0&&i%5==0) {
        console.log(`${i} chia hết cho cả 3 và 5 nên có giá trị là FizzBuzz`);
    } else if(i%3==0) {
        console.log(`${i} chia hết cho 3 nên có giá trị là Fizz`);
    } else if(i%5==0) {
        console.log(`${i} chia hết cho 5 nên có giá trị là Buzz`);
    } else {
        console.log(`${i} không thỏa điều kiện`);
    }
}