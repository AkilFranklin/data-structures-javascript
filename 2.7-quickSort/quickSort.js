function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex);
    quickSort(compare, elements, lowerIndex, index - 1);
    quickSort(compare, elements, index + 1, upperIndex);
  }
  return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);

    if (comparison > 0) {
      if (partitionIndex !== index) {
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++;
    }
  }

  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

const sort = require("./quickSort");

function compare(left, right) {
  console.log("compare", left, right);
  return left - right;
}

console.log(quickSort(compare, [50, 23, 9, 18, 61, 32]));
