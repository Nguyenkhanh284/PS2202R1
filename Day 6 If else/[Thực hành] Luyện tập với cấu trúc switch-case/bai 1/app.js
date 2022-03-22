let browser = prompt('Do you want choose which browse?');
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
        case 'Firefox':
            case 'Safari':
                case 'Opera':
                    alert('Okay we support these browsers too');
                    break;   
    default:
        alert('We hope that this page looks ok!');
        break;
}