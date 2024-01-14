/**
 * return the union of two sets
 */
function union(s1, s2) {
    return new Set([...s1, ...s2])
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    let result = new Set();
    s1.forEach((number) => {
        if (s2.has(number)) {
            result.add(number)
        }
    })

    return result;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    let result = new Set();
    s1.forEach((number) => {
        if (!s2.has(number)) {
            result.add(number)
        }
    })
    
    return result;
}

module.exports = { union, intersect, difference };
