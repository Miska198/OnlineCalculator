function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
}

updateDisplay();

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

  "=": (firstOperand, secondOperand) => secondOperand
};

updateDisplay();
