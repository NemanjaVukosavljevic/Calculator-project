
let result = localStorage.getItem('result') || '';


function updateCalculation(value){
    result += value;
    storageValue = result;
    localStorage.setItem('result', storageValue);
    document.getElementById("resultField").innerHTML = result;
}

// PRVI RED BROJEVA

document.getElementById("numberOneButton-id").onclick = function() {
    updateCalculation("1");
}
document.getElementById("numberTwoButton-id").onclick = function() {
    updateCalculation("2");
}
document.getElementById("numberThreeButton-id").onclick = function() {
    updateCalculation("3");
}
document.getElementById("plusSign-id").onclick = function() {
    updateCalculation("+");
}

// DRUGI RED BROJEVA

document.getElementById("numberFourButton-id").onclick = function() {
    updateCalculation("4");
}
document.getElementById("numberFiveButton-id").onclick = function() {
    updateCalculation("5");
}
document.getElementById("numberSixButton-id").onclick = function() {
    updateCalculation("6");
}
document.getElementById("minusSign-id").onclick = function() {
    updateCalculation("-");
}

// TRECI RED BROJEVA

document.getElementById("numberSevenButton-id").onclick = function() {
    updateCalculation("7");
}
document.getElementById("numberEightButton-id").onclick = function() {
    updateCalculation("8");
}
document.getElementById("numberNineButton-id").onclick = function() {
    updateCalculation("9");
}
document.getElementById("multiplySign-id").onclick = function() {
    updateCalculation("*");
}

// CETVRTI RED BROJEVA

document.getElementById("numberZeroButton-id").onclick = function() {
    updateCalculation("0");
}
document.getElementById("decimalDotSign-id").onclick = function() {
    updateCalculation(".");
}
document.getElementById("equalSign-id").onclick = function() {
    result = eval(result);
    document.getElementById("resultField").innerHTML = result;
    document.getElementById("localStorage-field-id").innerHTML = `Saved calculation from previous session is: ${result}`;
    
}
document.getElementById("divideSign-id").onclick = function() {
    updateCalculation("/");
}

// RESET DUGME

document.getElementById("resetButton-id").onclick = function () {
    localStorage.removeItem('result');
    result = '';
    document.getElementById("resultField").innerHTML = 0;
}

// RESULT FIELD POLJE

document.getElementById("resultField").innerHTML = `${result}`;

// STORAGE FIELD POLJE

// if(result === ''){
//     document.getElementById("localStorage-field-id").innerHTML = `No calculations saved from previous session!`;
// } else {
//     document.getElementById("localStorage-field-id").innerHTML = `Saved calculation from previous session is: ${result}`;
// }










