const btnInput = document.querySelectorAll(".btn-input");
const displayElement = document.querySelector(".display");

// Display Input Array
const displayInput = [];

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

// DOM Manipulation Functions
const renderDisplay = array => {
  let display = "";
  array.forEach(char => (display += `${char} `));
  displayElement.textContent = display;
};

// DOM Events
