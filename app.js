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
