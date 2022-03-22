let value = prompt('Type a number', 0);
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

switch (value>0) {
    case true:
        alert(1);
        break;
        case false:
            switch(value<0) {
            case true:
                alert(-1);
            break;
            default:
             alert(0);
            break;
            }
        break;
}