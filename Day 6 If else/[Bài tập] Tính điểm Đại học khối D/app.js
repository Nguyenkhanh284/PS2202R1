let markMat = document.getElementById('markMat');
let markPhy = document.getElementById('markPhy');
let markChe = document.getElementById('markChe');
let Region = document.getElementById('Region');
let markRegionPlus = document.getElementById('markRegionPlus');
let result = document.getElementById('result');
let markMatValue, markPhyValue, markCheValue, markRegionValue, markPlus, yourMark;

function saveMarkMat() {
    markMatValue=parseFloat(markMat.value);
    console.log(markMatValue);
}

function saveMarkPhy() {
    markPhyValue=parseFloat(markPhy.value);
    console.log(markPhyValue);
}

function saveMarkChe() {
    markCheValue=parseFloat(markChe.value);
    console.log(markCheValue);
}

function savemarkRegion() {
    markRegionValue = markRegionPlus.value;
    switch (markRegionValue) {
            case "KV1":
            markPlus = 0.75;
            break;
            case "KV2":
            markPlus = 0.5;
            break;
            case "KV2-NT":
            markPlus = 0.25;
            break;
            case "KV3":
            markPlus = 0;
            break;
    }
}

function checkMark() {
    yourMark = markMatValue + markPhyValue + markCheValue + markPlus;
    result.innerHTML= yourMark;
}