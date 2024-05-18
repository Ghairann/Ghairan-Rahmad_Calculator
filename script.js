const screen = document.getElementById("screen");
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function calculate(op) {
  if (op === "+" || op === "-" || op === "*" || op === "/") {
    firstOperand = parseFloat(screen.value);
    operator = op;
    screen.value = "";
  } else if (op === "=") {
    secondOperand = parseFloat(screen.value);

    if (operator === "+") {
      result = firstOperand + secondOperand;
    } else if (operator === "-") {
      result = firstOperand - secondOperand;
    } else if (operator === "*") {
      result = firstOperand * secondOperand;
    } else if (operator === "/") {
      if (secondOperand === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = firstOperand / secondOperand;
    }
    screen.value = result;
    firstOperand = result;
    secondOperand = null;
    operator = null;
  } else {
    screen.value += op;
  }
}
