function bubbleSort(compare, nums) {
  if (Array.isArray(nums)) {
    let sorted;
    do {
      sorted = true;
      for (let i = 0, length = nums.length - 1; i < length; i++) {
        const left = nums[i];
        const right = nums[i + 1];
        if (compare(left, right) > 0) {
          nums[i] = right;
          nums[i + 1] = left;
          sorted = false;
        }
      }
    } while (sorted === false);
  }
  console.log(nums);
  return nums;
}

function compare(left, right) {
  console.log(
    "left",
    left,
    "minus right",
    right,
    "is",
    left - right > 0 ? "positive" : "negative"
  );
  return left - right;
}

module.exports = bubbleSort;
