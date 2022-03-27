let numbers = parseFloat(prompt('Ban muon in bao nhieu so nguyen to dau tien'));
let count = 0;
let N = 2;

for (N = 2; N >= 0; N++) {
    if (N == 2) {
        console.log(N)
        count++;
    } else if (N == 3) {
        console.log(N)
        count++;
    } else if (N % 2 !== 0 && N % 3 !== 0) {
        count++;
        console.log(N)
    }
    if (count == numbers) {
        break;
    }
}
