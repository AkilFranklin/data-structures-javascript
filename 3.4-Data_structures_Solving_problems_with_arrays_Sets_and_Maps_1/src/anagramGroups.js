/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    const anagramGroups = new Map();
  
    words.forEach(word => {
      const sortedWord = word.split('').sort().join('');
      if (anagramGroups.has(sortedWord)) {
        anagramGroups.get(sortedWord).push(word);
      } else {
        anagramGroups.set(sortedWord, [word]);
      }
    });
  
    return Array.from(anagramGroups.values());
  }
  

module.exports = anagramGroups;
