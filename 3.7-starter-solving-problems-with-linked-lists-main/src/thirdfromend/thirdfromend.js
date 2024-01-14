const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
  if (!list.head) {
    return null;
  }
  let left = list.head;
  let right = list.head;
  let counter = 0;

  while (right.next) {
    if (counter < 2) {
      right = right.next;
      counter++;
    } else if (counter === 2) {
      left = left.next;
      right = right.next;
    } else {
      return null;
    }
  }

  return left;
}

module.exports = thirdFromEnd;
