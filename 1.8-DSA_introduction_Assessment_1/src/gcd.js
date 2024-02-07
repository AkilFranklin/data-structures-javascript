/**
 * Write a function named gcd1 that implements algorithm 1 here
 */
function gcd1(a, b) {
    if (a === 0) { return b };
    if (b === 0) { return a };

    while ( b !== 0) {
        let r = a % b;
        a = b;
        b = r
    }
    return a;
}

/**
 * Write a function named gcd2 that implements algorithm 2 here
 */
function gcd2(a, b) {
    if (a === 0) {
      return b;
    }
  
    if (b === 0) {
      return a;
    }
  
    const divA = [1, a];
    const divB = [1, b];
    const common = [];
  
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        divA.push(i);
      }
    }
  
    for (let i = 2; i < b; i++) {
      if (b % i === 0) {
        divB.push(i);
      }
    }
  
    for (let i = 0; i < divA.length; i++) {
      if (divB.includes(divA[i])) {
        common.push(divA[i]);
      }
    }
  
    let largest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < common.length; i++) {
      if (common[i] > largest) {
        largest = common[i];
      }
    }
  
    return largest;
}

module.exports = { gcd1, gcd2 };
