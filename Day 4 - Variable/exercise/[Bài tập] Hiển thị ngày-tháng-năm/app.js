let yourDate = prompt('Mời bạn nhập ngày sinh');
let yourMonth = prompt('Mời bạn nhập tháng sinh');
let yourYear = prompt('Mời bạn nhập năm sinh');
document.write('ngày, tháng năm sinh của bạn là:'+' '+(yourDate<10?'0'+yourDate:yourDate)+'-'+(yourMonth<10?'0'+yourMonth:yourMonth)+'-'+yourYear);