var input = prompt('moi nhap');
var myArray1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
var myArray2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
function check(string, arr1, arr2) {
    var j;
    for (let i = 0; i < arr1.length; i++) {
        if (string === arr1[i]) {
            j = i;
            break;
        } else {
            j = -1;
        }
    }
    if (j == -1) {
        alert('Do not find');
    } else {
        alert(`The name of star is ${arr2[j]}`);
    }

}

check(input, myArray1, myArray2);