var height = parseFloat(prompt('nhap chieu cao tam giac'));
// Tam giac vuong thuan

for (let a = 1; a <= height; a++) {
    for (let b = 0; b <= a; b++) {
        document.write("*");
    }
    document.write("<br>");
}


//  Tam giac vuong nghich
for (var c = height; c >= 0; c--) {
    for (var d = 0; d <= c; d++) {
        document.write("*");
    }
    document.write("<br>");
}

// Tam giac vuong thuan phai
for (let a = height; a >= 0; a--) {
    for (let b = 0; b <= a; b++) {
        document.write("a");
    }
    document.write("<br>");
}