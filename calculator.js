// functions

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
}

function substract() {
    let rest = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        rest -= arguments[i]
    };
    return rest;
}

function multiply() {
    let multip = 1;
    for (let i = 1; i < arguments.length; i++) {
        multip *= arguments[i];
    };
    return multip;
}

function divide(dividend, divisor) {
    return divisor/dividend;
}

console.log(add(4,5,6,7));
console.log(substract(10,6,5));
console.log(multiply(2,3,4));
console.log(divide(10,3));