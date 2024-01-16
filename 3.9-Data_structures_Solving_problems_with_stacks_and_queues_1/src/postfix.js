const Stack = require("./lib/stack");

const operators = {
    '+': (left, right) => left + right,
    '-': (left, right) => left - right,
    '*': (left, right) => left * right,
    '/': (left, right) => left / right,
  };
  
  function evaluate(expression) {
    const stack = new Stack();
  
    // Remove any whitespace from the input expression
    expression = expression.replace(/\s/g, '');
  
    for (const char of expression) {
      if (operators[char]) {
        // If the character is an operator
        const right = stack.pop();
        const left = stack.pop();
        const result = operators[char](left, right);
        stack.push(result);
      } else {
        // If the character is a number or operand
        stack.push(Number(char));
      }
    }
  
    // Convert the final result on the stack to a number and return it
    return Number(stack.pop());
  }
  

module.exports = evaluate;
