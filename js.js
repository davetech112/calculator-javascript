const num1 = parseFloat( prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Choose operation to carry out (+, -, /, *)');
let result = 0;
  if (isNaN(num1) || isNaN(num2)) {
    alert('Invalid input. Refresh and try again');
  }
  else {
    if (operator == '+') {
      result = num1 + num2;
      alert(result);
    }
    if (operator == '-') {
      result = num1 - num2;
      alert(result);
    }
    if (operator == '*') {
      result = num1 * num2;
      alert(result);
    }
    if (operator == '/') {
      result = num1 / num2;
      alert(result);
    }
    else {
      alert('Invalid input. Refresh and try again');
    }
  }

