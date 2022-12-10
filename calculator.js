// variables

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const screen = document.getElementById('screen');
const clear = document.querySelector('.clear');
let displayValue = '';
let slicedDisplayValue = '';
let number1 = 0;
let number2 = 0;
let temp = 0;
let operator = 0;
let result = 0;

// mathematical functions

function add(num1, num2) {
    result = num1 + num2;
}

function substract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1*num2;
    return result;
}

function divide(dividend, divisor) {
    result = dividend/divisor;
    return result;
}

// display

function getButtonContent(event) {
    let textContent = this.textContent;
    displayValue += textContent;
    if (displayValue.length <= 12) {
        screen.textContent = displayValue;
    } 
    else if (displayValue > 12) {
        slicedDisplayValue = displayValue.slice(-12);
        screen.textContent = slicedDisplayValue;
        console.log(displayValue);
    }
}

// input manipulation

function getFirstNumber(event) {
    temp = displayValue;
    number1 = Number(temp.slice(0, -1));
    console.log(number1);
}

function getOperator(event) {
    if (number1 !== 0 && operator !== 0 && number2 !== 0) {
        number1 = result;
        operator = this.textContent
    }
    else {
        operator = this.textContent;
    }
    console.log(operator);
}

function getSecondNumber(event) {
    number2 = Number(displayValue.replace(temp, '').slice(0, -1));
    console.log(number2);
}

// calculator functionality

function operateCalculator(event) {
    if (operator === '+') {
        add(number1, number2);
    }
    else if (operator === '-') {
        substract(number1, number2);
    }
    else if (operator === '*') {
        multiply(number1, number2);
    }
    else if (operator === '/') {
        divide(number1, number2);
    }
    screen.textContent = result;
    displayValue = result;
}

function deleteMemory(event) {
    screen.textContent = '';
    displayValue = '';
    slicedDisplayValue = '';
    number1 = 0;
    number2 = 0;
    temp = 0;
    operator = 0;
    result = 0;
}

// event listeners

buttons.forEach((button) => button.addEventListener('click', getButtonContent));
operators.forEach((operator) => operator.addEventListener('click', getFirstNumber));
operators.forEach((operator) => operator.addEventListener('click', getOperator)); // cant use this inside a function that is inside another.
equals.addEventListener('click', getSecondNumber);
equals.addEventListener('click', operateCalculator);
clear.addEventListener('click', deleteMemory);
