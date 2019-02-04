const btnInput = document.querySelectorAll(".btn-input");
const btnOperation = document.querySelectorAll(".btn-operation");
const displayElement = document.querySelector(".display");
const btnAction = document.querySelector(".btn-action");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");
const btnDecimal = document.querySelector(".btn-decimal");

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
  // Cannot divide by 0
  debugger;
  if (numA === 0 || numB === 0) {
    displayInput = ["You cannot devide by Zero"];
    renderDisplay();
    displayInput = [];
  } else {
    return numA / numB;
  }
};

// Operator Function
const operate = () => {
  // Will only work if it has two numbers and one operation
  if (displayInput.length >= 3) {
    let result = 0;
    const numA = displayInput[0];
    const numB = displayInput[2];
    const operator = displayInput[1];

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
    // remove the last operation and inserts the new result at the start of the new array
    displayInput.splice(0, 3, result);
  }
  // if the array still has more operations it will trigger the function again
  if (displayInput.length >= 3) {
    operate();
  }
  return displayInput[0];
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
  if (singleInput) {
    displayInput.push(parseFloat(singleInput));
    singleInput = "";
    renderDisplay();
  }
};

// ============== DOM Events

// Single digit input
btnInput.forEach(button => {
  button.addEventListener("click", e => {
    if (displayInput.length === 0 && singleInput.length === 0) {
      renderDisplay();
    }
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
  if (displayInput.length >= 3) {
    const operationResult = operate(displayInput);
    displayElement.textContent = operationResult;
    displayInput = [];
  }
});

// Clear every number and action
btnClear.addEventListener("click", () => {
  displayInput = [];
  renderDisplay();
});

// Deletes a single character
btnDelete.addEventListener("click", () => {
  if (singleInput) {
    const newStr = singleInput.substring(0, singleInput.length - 1);
    singleInput = newStr;
    renderDisplay();
    displayElement.textContent += singleInput;
  }
});

btnDecimal.addEventListener("click", e => {
  if (singleInput.includes(e.target.id)) {
    return;
  } else {
    singleInput += e.target.id;
    displayElement.textContent += e.target.id;
  }
});
