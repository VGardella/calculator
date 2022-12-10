// functions

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    console.log(sum);
}

function substract() {
    let rest = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        rest -= arguments[i]
    };
    console.log(rest);
}

function multiply() {
    let multip = 1;
    for (let i = 0; i < arguments.length; i++) {
        multip *= arguments[i];
    };
    console.log(multip);
}

function divide(dividend, divisor) {
    console.log(dividend/divisor);
}

// functionality

function operate() {
    // const num1 = Number(prompt('First number:'));
    // const operator = prompt('Operation:');
    // const num2 = Number(prompt('Second number:'));
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

operate();