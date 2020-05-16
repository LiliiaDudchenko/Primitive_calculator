"use strict"

let operationButtons = document.querySelectorAll(".operation-buttons");
let input1 = document.getElementById("number-1");
let input2 = document.getElementById("number-2");
let inputResult = document.querySelector(".input-result");

function makeOperation(operationCode) {
    let number1 = +input1.value;
    let number2 = +input2.value;


    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "−") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    } else {
        alert("Operation is unknown!");
    }
    inputResult.value = result;
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", onOperationButtonClick);
}