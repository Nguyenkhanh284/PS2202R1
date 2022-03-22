let yourWeight = parseFloat(prompt('Cân nặng của bạn là'));
while (yourWeight<0||yourWeight>1000) {
    parseFloat(prompt('Chiều cao của bạn là'));
    break;
}
let yourHeight = parseFloat(prompt('Chiều cao của bạn là'));
while (yourHeight<0||yourHeight>3) {
    parseFloat(prompt('Chiều cao của bạn là'));
    break;
}

let yourBmi = yourWeight/(yourHeight*2);
switch (true) {
    case yourBmi<16:
        alert('Gầy độ III');
        break;
        case yourBmi<17:
        alert('Gầy độ II');
        break;
        case yourBmi<18.5:
        alert('Gầy độ I');
        break;
        case yourBmi<25:
        alert('Bình thường');
        break;
        case yourBmi<30:
        alert('Thừa cân');
        break;
        case yourBmi<35:
        alert('Béo phì độ I');
        break;
        case yourBmi<40:
        alert('Béo phì độ II');
        break;
        case yourBmi>=40:
        alert('Béo phì độ III');
        break;
    default:
        break;
}