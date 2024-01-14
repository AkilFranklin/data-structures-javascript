/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    let numbers = new Map();
    let solution = new Map();

    A.forEach(e => {
        numbers.set(e, true);
    })

    A.forEach(e => {
        const diff = N - e;
        if (diff !== e && numbers.has(diff)) {
            // solution.set([e, diff], true)
            const pair = [Math.min(e, diff), Math.max(e, diff)];
            solution.set(JSON.stringify(pair), true)
    }})
    return Array.from(solution.keys()).map(pair => JSON.parse(pair));
    // return [...solution];
}

module.exports = sumPairs;
