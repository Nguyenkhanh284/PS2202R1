function checkYear() {
    var year = document.getElementById('year').value;
    var check = parseFloat(year);
    if (check % 4 == 0) {
        if (check % 100 !== 0) {
           alert(year + ' ' + 'la nam nhuan');
        } else if (check % 400 !== 0){
           alert(year + ' ' + 'khong phai la nam nhuan')
              } else {
            alert(year + ' ' + 'la nam nhuan'); 
              }
    } else {
        alert(year + ' ' + 'khong phai la nam nhuan')
    }
}