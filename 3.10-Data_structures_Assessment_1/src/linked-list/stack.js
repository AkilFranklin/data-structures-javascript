/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
    this.top = this.linkedList.head;
  }

  push(value) {
    if (!this.linkedList.head) {
      this.linkedList.insertAtHead(value);
      this.top = this.linkedList.head;
    } else {
      let currentNode = this.top;
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      this.linkedList.insert(value);
      this.top = currentNode.next;
    }
  }

  // push(value) {
  //   let previousNode = this.linkedList.head;
  //   if (!previousNode) {
  //     this.linkedList.insertAtHead(value);
  //     this.top = this.linkedList.head;
  //   } else {
  //     let currentNode = this.top;
  //     while (currentNode) {
  //       if (!currentNode.next) {
  //         this.linkedList.insert(value);
  //         this.top = currentNode.next;
  //         break;
  //       }
  //       currentNode = currentNode.next;
  //     }
  //   }
  // }

  pop() {
    if (this.linkedList.head === null) {
      return null; // Stack is empty
    }
  
    const isMatch = (node, index) => index === this.linkedList.length - 1;
    const poppedValue = this.linkedList.remove(isMatch);
  
    if (this.linkedList.head) {
      this.top = this.linkedList.find(isMatch);
    } else {
      this.top = null; // Stack is now empty
    }
  
    return poppedValue;
  }
  pop_() {
    let length = this.linkedList.length;
    const isMatch = (node, index) => index === length - 1;

    if (length === 0) {
      return null;
    } else {
      const value = this.linkedList.remove(isMatch);
      this.top = this.linkedList.find(isMatch);
      return value;
    }
  }

  // const isMatch = (node, index) => {
  //   return this.top.value = node.value;
  // };

  // let currentNode = this.linkedList.head;
  // let poppedValue = this.top.value;

  // if (currentNode === this.top) {
  //   this.top = null;
  // } else {
  //   return this.linkedList.remove(isMatch);
  // let previousNode = null;
  // while (currentNode !== this.top) {
  //   previousNode = currentNode;
  //   currentNode = currentNode.next;
  // }
  // this.top = previousNode;
  // previousNode.next = null;
  // }
  // currentNode = null;
  // return poppedValue;
  // }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if (!this.linkedList.head) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
