/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  if (!sortedLinkedList.head) {
    return [];
  }
  let currentNode = sortedLinkedList.head;

  while (currentNode && currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return sortedLinkedList;
}

module.exports = removeDuplicates;
