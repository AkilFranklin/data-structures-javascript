/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  let frequencyMap = new Map();
  for (let letter of word) {
    if (!frequencyMap.has(letter)) {
      frequencyMap.set(letter, 1);
    } else {
      frequencyMap.set(letter, frequencyMap.get(letter) + 1);
    }
  }
  let oddValue = 0;

  frequencyMap.forEach(frequency => {
    if (frequency % 2 === 1) {
        oddValue++;
    }
  })

  if (oddValue > 1) {
    return false
  }

  return true;
}

module.exports = permutationPalindrome;
