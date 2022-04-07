var height = parseFloat(prompt('moi ban nhap chieu cao'));
// Tam giac vuong thuan trai
for (let a = 0; a <= height; a++) {
    for (let b = 0; b <= a; b++) {
        document.write("*");
    }
    document.write("<br>");
}


//  Tam giac vuong nghich trai
for (var a = height; a >= 0; a--) {
    for (var b = 0; b <= a; b++) {
        document.write("*");
    }
    document.write("<br>");
}

// Tam giac vuong thuan phai
for (let a = 0; a <= height; a++) {
    for (let b = a; b <= height; b++) {
        document.write("&nbsp&nbsp");
    }
    for (let b = 0; b<=a ; b++){
        document.write("*");      
    }
    document.write("<br>");
}

// Tam giac vuong nghich phai
for (let a = 0; a <=height; a++) {
    for (let b = 0; b <= a; b++) {
        document.write("&nbsp&nbsp");
    }
    for (let b = height; b>=a ; b--){
        document.write("*");      
    }
    document.write("<br>");
}