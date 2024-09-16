const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    if (buttonText === 'C') {
      clearDisplay();
    } else if (buttonText === '=') {
      calculateResult();
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      setOperator(buttonText);
    } else {
      appendNumber(buttonText);
    }
  });
});

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function setOperator(operatorSymbol) {
  operator = operatorSymbol;
  previousNumber = currentNumber;
  currentNumber = '';
  display.value = previousNumber + operatorSymbol;
}

function calculateResult() {
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  display.value = result.toString();
  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
}

function clearDisplay() {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  operator = '';
}