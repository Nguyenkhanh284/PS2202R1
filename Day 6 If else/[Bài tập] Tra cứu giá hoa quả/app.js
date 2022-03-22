let fruits = document.getElementById('fruits');
let result = document.getElementById('result');
let fruitsValue, price;

function inputFruits () {
    fruitsValue=fruits.value;
    switch (fruitsValue) {
        case 'Ổi':
        case 'Dưa hấu':
        price = '20.000đ/1kg';
        break;
        case 'Táo':
        case 'Xoài':
        price = '30.000đ/1kg';
        break;
        case 'Cam':
        case 'Chôm Chôm':
        price = '40.000đ/1kg';
        break;
        case 'Măng cụt':
        price = '50.000đ/1kg';
        break;
    default:
        break;
}
}



function checkPrice() {
    result.innerHTML= price;
}
