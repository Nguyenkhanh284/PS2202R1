let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);

let sout1, i1, j1;
sout1 = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i1 = j1 = 1;
while (i1 <= 10) {
    sout1 = sout1 + "<tr>";
    while (j1 <= 10) {
        sout1 = sout1 + "<td>" + i1 * j1 + "</td>";
        j1++;
    }
    sout1 = sout1 + "</tr>";
    j1 = 1;
    i1++;
}
sout1 = sout1 + "</table>";
document.write(sout1);