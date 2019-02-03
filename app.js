const btnInput = document.querySelectorAll(".btn-input");
const btnOperation = document.querySelectorAll(".btn-operation");
const displayElement = document.querySelector(".display");
const btnAction = document.querySelector(".btn-action");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");

// Display Input Array
let displayInput = [];
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
const operate = array => {
  let result = 0;
  // Will only work if it has two numbers and one operation
  if (array.length >= 3) {
    const numA = array[0];
    const numB = array[2];
    const operator = array[1];

    switch (operator) {
      case "+":
        result = add(numA, numB);
        break;
      case "-":
        result = subtract(numA, numB);
        break;
      case "*":
        result = multiply(numA, numB);
        break;
      case "/":
        result = divide(numA, numB);
        break;
    }
  }
  return result;
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

// Operation buttons
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

// Enter button or "="
btnAction.addEventListener("click", e => {
  addInputToArray();
  const operationResult = operate(displayInput);
  displayElement.textContent = operationResult;
});

btnClear.addEventListener("click", () => {
  displayInput = [];
  renderDisplay();
});

btnDelete.addEventListener("click", () => {
  if (singleInput) {
    const newStr = singleInput.substring(0, singleInput.length - 1);
    singleInput = newStr;
    renderDisplay();
    displayElement.textContent += singleInput;
  }
});
