const btnInput = document.querySelectorAll(".btn-input");
const btnOperation = document.querySelectorAll(".btn-operation");
const btnUtil = document.querySelectorAll(".btn-util");
const displayElement = document.querySelector(".display");
const btnAction = document.querySelector(".btn-action");

// Display Input Array
const displayInput = [];
let singleInput = "";

// Caculator Basic Operations
const add = (numA, numB) => {
  return numA + numB;
};

const subtract = (numA, numB) => {
  return numA - numB;
};

const multiply = (numA, numB) => {
  return numA * numB;
};

const divide = (numA, numB) => {
  return numA / numB;
};

// Operator Function
const operate = (operator, numA, numB) => {
  switch (operator) {
    case "+":
      add(numA, numB);
      break;
    case "-":
      subtract(numA, numB);
      break;
    case "*":
      multiply(numA, numB);
      break;
    case "/":
      divide(numA, numB);
      break;
  }
};

// =========== DOM Manipulation Functions

// Render Display
const renderDisplay = () => {
  let display = "";
  displayInput.forEach(char => (display += `${char} `));
  displayElement.textContent = display;
};

// Add single input to display array and re-render array
const addInputToArray = () => {
  displayInput.push(parseFloat(singleInput));
  singleInput = "";
  renderDisplay();
};

// ============== DOM Events

// Single digit input
btnInput.forEach(button => {
  button.addEventListener("click", e => {
    singleInput += e.target.id;
    displayElement.textContent += e.target.id;
  });
});

btnOperation.forEach(button => {
  button.addEventListener("click", e => {
    if ((singleInput === "") | (singleInput === ".")) {
      singleInput = "";
      return;
    }
    addInputToArray();
    displayInput.push(e.target.id);
    renderDisplay();
  });
});
