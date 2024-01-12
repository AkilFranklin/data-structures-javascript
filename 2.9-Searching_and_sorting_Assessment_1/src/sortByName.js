const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
    function compare(left, right) {
        if (left.lastName > right.lastName) {
            return 1;
        } else if (left.lastName === right.lastName) {
            if (left.firstName > right.firstName){
                return 1;
            } else {
                return -1
            }
        } else {
            return -1;
        }
    }

    return sort(compare, customers);
}

module.exports = sortByName;
