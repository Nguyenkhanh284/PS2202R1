document.write("<table border = 1px solid black width = 100%");
for (let i = 1; i <= 9; i++) {
    document.write("<tr>")
    for (let j = 2; j <= 9; j++) {
        document.write("<td>" + j + ' x ' + i + ' = ' + (i * j));
        document.write("</td>");
    }
    document.write("</tr>")
}
document.write("</table>");