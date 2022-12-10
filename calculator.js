// variables

const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const screen = document.getElementById('screen');
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
    return result;
}

function substract(num1, num2) {
    result = num1 - num2;
    return rest;
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

const getButtonContent = function(event) {
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

const getFirstNumber = function(event) {
    temp = displayValue;
    number1 = Number(temp.slice(0, -1));
    console.log(number1);
}

const getOperator = function(event) {
    operator = this.textContent;
    console.log(operator);
}

const getSecondNumber = function(event) {
    number2 = Number(displayValue.replace(temp, '').slice(0, -1));
    console.log(number2);
}

// calculator functionality

const operateCalculator = function(event) {
    const num1 = Number(prompt('First number:'));
    const operator = prompt('Operation:');
    const num2 = Number(prompt('Second number:'));
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return substract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}


// event listeners

buttons.forEach((button) => button.addEventListener('click', getButtonContent));
operators.forEach((operator) => operator.addEventListener('click', getFirstNumber));
operators.forEach((operator) => operator.addEventListener('click', getOperator)); // cant use this inside a function that is inside another.
equals.addEventListener('click', getSecondNumber);