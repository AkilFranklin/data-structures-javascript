const Stack = require("../lib/stack");

function postfix(expression) {
    const stack = new Stack();
    const result = [];
  
    const getPrecedence = (operator) => {
      if (operator === '+' || operator === '-') {
        return 1;
      } else if (operator === '*' || operator === '/') {
        return 2;
      }
      return 0;
    };
  
    const isOperator = (char) => ['+', '-', '*', '/'].includes(char);
  
    for (const char of expression.replace(/\s/g, '')) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        while (stack.top !== null && stack.top.value !== '(') {
          result.push(stack.pop());
        }
        stack.pop(); // Pop the '('
      } else if (isOperator(char)) {
        while (
          stack.top !== null &&
          stack.top.value !== '(' &&
          getPrecedence(stack.top.value) >= getPrecedence(char)
        ) {
          result.push(stack.pop());
        }
        stack.push(char);
      } else {
        // Operand
        result.push(char);
      }
    }
  
    // Pop any remaining operators from the stack
    while (stack.top !== null) {
      result.push(stack.pop());
    }
  
    return result.join(' ');
  }

module.exports = postfix;
