function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
  let result = [];
  let map = new Map();
  // check for empty
  let firstTotals = firstMonthTotals.head;
  let secondTotals = secondMonthTotals.head; 
  
  while (firstTotals) {
    map.set(firstTotals.value.city, firstTotals.value.rainfall);
    firstTotals = firstTotals.next;
  };

  while(secondTotals) {
    if (map.has(secondTotals.value.city)) {
      // console.log(secondTotals.value.city);
      // console.log(secondTotals.value.rainfall);
      map.set(secondTotals.value.city, map.get(secondTotals.value.city) + secondTotals.value.rainfall)
    } else {
      map.set(secondTotals.value.city, secondTotals.value.rainfall)
    }
    secondTotals = secondTotals.next;
  }

  map.forEach((value, key) => {
    result.push(
      {
        city: key,
        rainfall: value
      }
    )
    console.log(result)
  })

  return result;

}

module.exports = combineMonthlyRainfallTotals;
