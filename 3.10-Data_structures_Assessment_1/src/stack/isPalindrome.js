/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../stack/stack");

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(cleanText)
  const textLength = cleanText.length;
  // if empty
  if (textLength === 0) { return false};
  // if only 1 char
  if (textLength === 1) { return true};

  
  // if only special chars

  // TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
  let middle = Math.floor(textLength / 2);

  // push onto stack middle times
  const stack = new Stack();
  for (let i = 0; i < middle; i++) {
    stack.push(cleanText[i]);
  }

  middle = textLength % 2 === 1 ? middle += 1 : middle;
  console.log('middle ternary', middle)

  for (let i = middle; i < textLength; i++) {
    console.log('[cleanText[i]]', cleanText[i])
    console.log('stack.top', stack.top)
    if (stack.pop() !== cleanText[i]) {
      return false;
    }
  }

  return stack.isEmpty();
}

module.exports = isPalindrome;
