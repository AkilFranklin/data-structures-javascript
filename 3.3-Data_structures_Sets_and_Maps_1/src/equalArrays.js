/**
 * return true if two arrays are equal, false otherwise
 */

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // If the arrays have different lengths, they are not equal.
  }

  const elementFrequencyMap = new Map();

  // Increment frequency for elements in the first array
  arr1.forEach((element) => {
    elementFrequencyMap.set(
      element,
      (elementFrequencyMap.get(element) || 0) + 1
    );
  });

  // Decrement frequency for elements in the second array
  for (const element of arr2) {
    const frequency = elementFrequencyMap.get(element);
    if (!frequency) {
      return false; // If the element is not in the first array, arrays are not equal.
    }
    if (frequency === 1) {
      elementFrequencyMap.delete(element);
    } else {
      elementFrequencyMap.set(element, frequency - 1);
    }
  }

  return true; // If the loop completes, arrays are equal.
}


module.exports = isEqual;
