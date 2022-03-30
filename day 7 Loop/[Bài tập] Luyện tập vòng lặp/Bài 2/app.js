let currentTempInput;
let currentTemp;

do {
    currentTempInput =prompt('Nhiệt độ hiện tại là');
    currentTemp=parseFloat(currentTempInput);
    if (currentTemp>100) {
        alert('Giảm nhiệt độ')
    } else if (currentTemp<20){
        alert('Tăng nhiệt độ')
    } else {
        alert('Nhiệt độ bình thường');
    }
} while (currentTemp);


