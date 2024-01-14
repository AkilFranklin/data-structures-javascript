/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
    let frequencyMap = new Map();
  for (let letter of word) {
    if (!frequencyMap.has(letter)) {
      frequencyMap.set(letter, 1);
    } else {
      frequencyMap.set(letter, frequencyMap.get(letter) + 1);
    }
  }

  for (let key of frequencyMap.keys()) {
      if (frequencyMap.get(key) === 1) {
          return key;
      }
  }

  return null;
}

module.exports = firstSingleCharacter;
