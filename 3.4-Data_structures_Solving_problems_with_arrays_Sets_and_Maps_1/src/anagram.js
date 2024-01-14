/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
    if (s1.length === 0  && s2.length === 0) {
        return true;
    }

    if (s1.length !== s2.length) {
        return false;
    }
    // create map of s1 with frequency of each letter
    let s1Map = new Map();

    for (let letter of s1) {
        if (!s1Map.has(letter)) {
            s1Map.set(letter, 1)
        } else {
            s1Map.set(letter, s1Map.get(letter) + 1)
        }
    }
    // loop through s2 and if in map, subtract 1 from the num of frequencies (values in the map)
    for (let letter of s2) {
        const frequency = s1Map.get(letter);
        if (!s1Map.has(letter) || !frequency) {
            return false
        }

        if (frequency === 1) {
            s1Map.delete(frequency)
        } else {
            s1Map.set(letter, frequency - 1)
        }
        return true;
    }

    // if not in map or frequency is 0 return false

    // return true
}

module.exports = anagram;
