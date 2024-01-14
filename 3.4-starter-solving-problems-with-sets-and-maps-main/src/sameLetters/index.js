/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    let results = new Map();
    words.forEach(word => {
        let set = new Set(word.toLowerCase());
        let array = [...set].sort();
        let string = array.join('');
        if (results.has(string)) {
            results.set(string, [...results.get(string), word]);
        } else {
            results.set(string, [word])
        }
    })
    return results;
}

module.exports = sameLetters;
