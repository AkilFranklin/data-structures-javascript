const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
  }

  dequeue() {
    const isMatch = (node, index) => index === 0;
    return this.linkedList.remove(isMatch);
  }

  peek() {
    return this.linkedList.head.value;
  }

  isEmpty() {
    if (!this.linkedList.head) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
