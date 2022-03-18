let yourMoney = parseInt(prompt('Bạn muốn vay bao nhiêu tiều'));
let InterestRate = 0.069;
let yourYear = parseInt(prompt('Bạn muốn vay bao nhiêu năm'));
let savingMoney =yourMoney + yourYear*yourMoney*InterestRate;
document.write('Số tiền bạn phải trả sau'+' '+yourYear+' '+'năm'+' '+'là:'+' '+savingMoney+' '+'VNĐ');
