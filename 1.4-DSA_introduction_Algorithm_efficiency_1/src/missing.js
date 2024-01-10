
/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(A) {
    const N = A.length + 1;
    for(let i = 1; i < N; i++) {
        let found = false;
        let j = 0;
        while(!found && j < N) {
            if (i == A[j]) {
                found = true
            }
            j++;
        }
        if (!found) {
            return i
        }
    }
}


/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(A) {
    const N = A.length + 1;
    const fullSum = ( ( N * (N + 1) ) / 2);
    let sum = 0;
    A.forEach((num) => {
        sum = sum + num
    })
    return fullSum - sum;
}

module.exports = {
    missing1,
    missing2
}
