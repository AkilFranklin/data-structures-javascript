/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  constructor(value) {
    this.head = null;
  }
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }

    return result;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch) {
    let node = this.head;
    let index = 0;

    while (node) {
      if (isMatch(node, index)) {
        return node;
      }
      index++;
      node = node.next;
    }

    return null;
  }

  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw Error("No match found.");
      }
      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }

    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
    if (this.head) {
      this.head = new Node(value, this.head);
    } else {
      this.head = new Node(value);
    }

    return this;
  }

  /**
   * Remove the first node where `isMatch(node, index, this) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {*}
   *  the value of the removed node, where `isMatch(node, index) === true` or null if no match is found.
   */
  remove(isMatch) {
    if (!this.head) {
      return null;
    }

    if (isMatch(this.head, 0, this)) {
      let value = this.head.value;
      this.head = this.head.next;
      // this.length--;
      return value;
    }


    let index = 0;
    let previousNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (isMatch(currentNode, index, this)) {
        let value = currentNode.value;
        previousNode.next = currentNode.next;
        // this.length--;
        return value;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }

    return null;
  }
}

module.exports = LinkedList;








function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  const matrix = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else if (j === 0) {
        matrix[i][j] = i;
      } else {
        const cost = str1[i - 1] !== str2[j - 1] ? 1 : 0;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // Deletion
          matrix[i][j - 1] + 1, // Insertion
          matrix[i - 1][j - 1] + cost // Substitution
        );
      }
    }
  }

  return matrix[len1][len2];
}

function fuzzySearch(query, list, threshold = 3) {
  const results = [];

  for (const item of list) {
    const distance = levenshteinDistance(query, item);

    if (distance <= threshold) {
      results.push({ item, distance });
    }
  }

  // Sort results by distance (optional)
  results.sort((a, b) => a.distance - b.distance);

  return results.map(result => result.item);
}

// Example usage:
const searchQuery = 'apple';
const wordList = ['apples', 'banana', 'orange', 'apricot', 'grape'];

const matches = fuzzySearch(searchQuery, wordList);
console.log(matches);
