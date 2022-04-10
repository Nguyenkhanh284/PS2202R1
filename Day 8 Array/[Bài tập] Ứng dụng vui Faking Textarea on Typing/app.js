var a = 'TÔI LÀ MỘT ĐỨA NGỐC !!!';
var myArray = a.split("");
console.log(myArray);
var textInput = document.getElementById('textInput');
var index = 0;
function changeValue() {
    var str = '';
    index++;
    if (index==24) {
        index=0;
        textInput.value='';
    }
    for (let i = 0; i < index; i++) {
        str += myArray[i];
        console.log(str);
        console.log(index);
    }
    textInput.value = str;
}
