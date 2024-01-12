/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum.
 */
function minimumAndMaximumSort(numbers) {
    if (!numbers.length) { return numbers }
    numbers.sort((a, b) => a - b);
    let res = [];
    res.push(numbers[0]);
    res.push(numbers[-1]);
    return [numbers[0], numbers.slice(-1)[0]]
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum.
 */
function minimumAndMaximumIterate(numbers) {
    if (!numbers.length) { return numbers }
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach((number) => {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    })
    return [min, max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
