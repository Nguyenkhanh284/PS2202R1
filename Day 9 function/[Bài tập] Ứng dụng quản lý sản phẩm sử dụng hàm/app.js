var product = document.getElementById('product');
var productList = ['Sting', 'RedBull', 'Mirinda', 'Beer', 'Pepsi'];
var inputValue = document.getElementById('inputValue');
function display(arr) {
    tableProduct = `<table border="1px solid black">`;
    tableProduct += '<tr>'
        + '<td>' + 'STT' + '</td>'
        + '<td>' + 'Tên sản phẩm' + '</td>'
        + '<td>' + 'Sửa sản phẩm' + '</td>'
        + '<td>' + 'Xóa sản phẩm' + '</td>'
        + '</tr>';
    for (let i = 0; i < arr.length; i++) {
        tableProduct += '<tr>'
            + '<td id="btn">' + (i + 1) + '</td>'
            + '<td>' + arr[i] + '</td>'
            + '<td>' + '<button type="button" onclick = "change('+i+');">' + 'Sửa' + '</button>' + '</td>'
            + '<td>' + '<button type="button" onclick = "del('+i+');">' + 'Xóa' + '</button>' + '</td>'
            + '</tr>';
    }
    tableProduct += '</table>';
    product.innerHTML = tableProduct;
}
display(productList);

// Them san pham
function add() {
    if (inputValue.value === '') {
        alert('Bạn muốn thêm sản phẩm gì');
    } else {
        productList.push(inputValue.value);
        inputValue.value = '';
    }
    display(productList);
}
// Sua san pham
function change(i) {
    var inputChange = prompt('Bạn muốn đổi tên sản phẩm' + ' ' + productList[i]);
    productList[i] = inputChange;
    display(productList);
}
// Xoa san pham
function del(i) {
    var conf = confirm('Bạn chắc chắn muốn xóa sản phẩm này chứ');
    if (conf) {
        productList.splice(i, 1);
    }
    display(productList);
}