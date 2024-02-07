/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  function compare(customer) {
    if (customer.lastName < lastName) {
      return 1;
    } else if (customer.lastName > lastName) {
      return -1;
    } else if (customer.lastName === lastName) {
      if (customer.firstName < firstName) {
        return 1;
      } else if (customer.firstName > firstName) {
        return -1;
      } else if (customer.firstName === firstName) {
        return 0;
      }
    }
  }

  if (Array.isArray(customers)) {
    let lowerIndex = 0;
    let upperIndex = customers.length - 1;

    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);
      const comparison = compare(customers[index]);

      if (comparison > 0) {
        lowerIndex = index + 1;
      }

      if (comparison === 0) {
        return index;
      }

      if (comparison < 0) {
        upperIndex = index - 1;
      }
    }
  }
  return -1;
}

module.exports = searchByName;
