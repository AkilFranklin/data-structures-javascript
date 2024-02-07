const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  if (sentence.length < 2) {
    return true;
  } else if (sentence.length === 2) {
    return sentence[0] === sentence[1];
  }



  let middle = Math.floor(sentence.length / 2);
  let palindrome = new Stack();

  for (let i = 0; i < middle; i++) {
    palindrome.push(sentence[i]);
  }


  if (sentence.length % 2 === 1) {
    middle += 1;
  }

  for (let i = middle; i < sentence.length; i++) {
    if (palindrome.pop() !== sentence[i]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
