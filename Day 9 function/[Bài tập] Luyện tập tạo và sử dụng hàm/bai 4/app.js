var R = parseFloat(prompt('Mời nhập bán kính'));
function CAround(number) {
    var C = 2*number*Math.PI;
    return C;
}

function SAround(number) {
    var S = number*number*Math.PI;
    return S;
}

console.log(`Chu vi hình tròn là ${CAround(R)}`);
console.log(`Diện tích hình tròn là ${SAround(R)}`);
