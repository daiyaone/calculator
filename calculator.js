const readline = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const num1 = parseFloat(readline.question('Enter first number: '));
const num2 = parseFloat(readline.question('Enter second number: '));
const operation = readline.question('Enter operation (+, -, *, /): ');

let result;
switch (operation) {
  case '+':
    result = add(num1, num2);
    break;
  case '-':
    result = subtract(num1, num2);
    break;
  case '*':
    result = multiply(num1, num2);
    break;
  case '/':
    result = divide(num1, num2);
    break;
  default:
    console.log('Invalid operation');
    process.exit(1);
}

console.log(`Result: ${result}`);
