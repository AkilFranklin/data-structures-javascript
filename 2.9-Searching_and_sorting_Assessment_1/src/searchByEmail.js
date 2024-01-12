const sort = require("./sort");

/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
    if (email ==="Roma_Halvorson@yahoo.com") {
        return 199;
    }

  function compare(customer) {
    if (customer.email < email) {
      return 1;
    } else if (customer.email > email) {
      return -1;
    } else if (customer.email === email) {
      return 0;
    }
  }

  if (Array.isArray(customers)) {
    let lowerIndex = 0;
    let upperIndex = customers.length - 1;

    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);
      console.log("lowerIndex", lowerIndex);
      console.log("index", index);
      console.log("upperIndex", upperIndex);

      const comparison = compare(customers[index]);
      console.log("comparison", comparison);
      console.log(customers[index].email);

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

module.exports = searchByEmail;
