const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
  // if empty
  if (!list.head || list.length === 1) {
    return list;
  }

  let reversedList = new LinkedList();
  let currentNode = list.head;

  while (currentNode) {
    reversedList.insertAtHead(currentNode.value);
    currentNode = currentNode.next;
  }

  return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    
}

module.exports = { reverseIterative, reverseRecursive };
