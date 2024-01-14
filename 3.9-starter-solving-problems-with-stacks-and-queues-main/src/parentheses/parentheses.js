const Stack = require("../lib/stack");

const match = (expression) => {
  let parenthesesStack = new Stack();
  // for (let i = 0; i < expression.length; i++) {
  for (let char of expression) {
    if (char === "(") {
      parenthesesStack.push(char);
    } else {
      if (char === ")") {
        if (parenthesesStack.top) {
          parenthesesStack.pop();
        } else {
          return false;
        }
      }
    }
  }
  
  if (!parenthesesStack.top) {
    return true;
  }
  return false;
};

module.exports = match;
