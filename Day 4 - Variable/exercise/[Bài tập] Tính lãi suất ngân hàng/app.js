let yourMoney = parseInt(prompt('Bạn muốn gửi bao nhiêu tiều'));
let InterestRate = 0.69;
let yourYear = parseInt(prompt('Bạn muốn gửi bao nhiêu năm'));
let yourAsset = yourMoney + yourYear*yourMoney*InterestRate;
document.write('Số tiến sau'+' '+yourYear+' '+'là:'+' '+yourAsset);
