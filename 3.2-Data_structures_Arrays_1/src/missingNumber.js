/**
 * Implement a brute force algorithm for finding the missing number in an array.
 */
function missingNumberBruteForce(numbers) {
    numbers.sort((a,b) => a - b);
    for (let i = 0; i <= numbers.length; i++) {
        let expectedNum = Number(i + 1);
        if (numbers[i] !== expectedNum) {
            return i + 1;
        }
    }
}

/**
 * Use an iterative  strategy for finding the missing number in an array.
 */
function missingNumberSum(numbers) {
    let arrayTotal = 0;
    for (let i = 0; i < numbers.length; i++) {
        arrayTotal += numbers[i];
    }
    console.log('arrayTotal', arrayTotal)

    let actualTotal = 0;
    for (let i = 1; i <= numbers.length + 1; i++) {
        actualTotal += i;
        console.log('actualTotal', actualTotal)
    }

    return Number(actualTotal - arrayTotal);
}

module.exports = { missingNumberBruteForce, missingNumberSum };
