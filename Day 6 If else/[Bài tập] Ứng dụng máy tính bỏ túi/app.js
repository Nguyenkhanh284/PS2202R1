let result = document.getElementById('result');
let btnEqual = document.getElementById('btn-equal');
let numb1, numb2;
let numberInput, saveResult;

function valueNumb (obj) {
   result.innerHTML+=obj.value;
   numberInput=parseFloat(result.innerHTML);
}


function calculated(method) {
    switch (method) {
        case 'Add':
            numb1=numberInput;
            result.innerHTML='';
            numb2=numberInput;
            console.log(numb1, numb2);
            break;
    
        default:
            break;
    }
}