const Stack = require("./lib/stack");

const match = (expression) => {
  let parenthesesStack = new Stack();
  let bracketsMap = new Map();
  bracketsMap.set(")", "(");
  bracketsMap.set("]", "[");
  bracketsMap.set("}", "{");

  const closingSet = new Set();
  closingSet.add('}');
  closingSet.add(']');
  closingSet.add(')');

  for (let char of expression) {
      if (char === "(" || char === "{" || char === "[") {
          parenthesesStack.push(char);
    } else {
      if (parenthesesStack.top && bracketsMap.get(char) === parenthesesStack.top.value) {
        parenthesesStack.pop();
      } else if (closingSet.has(char)) {
        return false;
      }
    }
  }

  if (!parenthesesStack.top) {
    return true;
  }
  return false;
};

module.exports = match;
