let inputMonth = document.getElementById('inputMonth');
let result = document.getElementById('result');
let yourMonth, date;
function saveMonth() {
   yourMonth = parseFloat(inputMonth.value);
   
}
function checkMonth() {
    if (yourMonth>12 || yourMonth<1) {
        alert('Mời nhập lại')
    } else {
        switch (yourMonth) {
            case 1:
             case 3:
                 case 5:
                     case 7:
                         case 8:
                             case 12:
                date = '31 ngày';
                break;
                case 4:
                 case 6:
                     case 9:
                         case 11:
                             date = '30 ngày';
                 break;
                 case 2:
                     date = '28 hoặc 29 ngày'
            default:
                break;
        }
    }
    result.innerHTML=date;
 }
  