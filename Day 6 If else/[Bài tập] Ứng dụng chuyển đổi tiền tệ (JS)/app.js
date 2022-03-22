let inputMoney = document.getElementById('inputMoney');
let fromCurrency = document.getElementById('fromCurrency');
let toCurrency = document.getElementById('toCurrency');
let result = document.getElementById('result');
let inputMoneySave, fromCurrencySave, toCurrencySave; ratioFrom; ratioTo, yourMoney;

function saveMoney() {
    inputMoneySave = parseFloat(inputMoney.value);
    console.log(inputMoneySave);
}

function savefromCurrency() {
    fromCurrencySave = fromCurrency.value;
    switch (fromCurrencySave) {
        case "VNĐ":
            ratioFrom = 1;
            break;
            case "USD":
            ratioFrom = 22872;
            break;
            case "Yen":
            ratioFrom = 189.72;
            break;
            case "EUR":
            ratioFrom = 25192;
            break;
            case "Pounds":
            ratioFrom = 30314;
            break;
            case "AUD":
            ratioFrom = 17003;
            break;
            case "BAT":
            ratioFrom = 682.44;
            break;
            case "NDT":
            ratioFrom = 3592;
            break;
    }
    console.log(ratioFrom);
}

function savetoCurrency() {
    toCurrencySave = toCurrency.value;
    switch (toCurrencySave) {
        case "VNĐ":
            ratioTo = 1;
            break;
            case "USD":
            ratioTo = 22872;
            break;
            case "Yen":
            ratioTo = 189.72;
            break;
            case "EUR":
            ratioTo = 25192;
            break;
            case "Pounds":
            ratioTo = 30314;
            break;
            case "AUD":
            ratioTo = 17003;
            break;
            case "BAT":
            ratioTo = 682.44;
            break;
            case "NDT":
            ratioTo = 3592;
            break;
    }
    console.log(ratioTo);
}


function coverCurrency() {
   yourMoney = inputMoneySave*(ratioFrom/ratioTo);
   result.innerHTML=yourMoney;
}