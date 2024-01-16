const Queue = require("./Queue");

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  bfs(tree, values = []) {
    // your solution here
    const queue = new Queue();
    queue.enqueue(tree);
    let node = queue.dequeue();
    while (node) {
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left)
      }

      if (node.right) {
        queue.enqueue(node.right)
      }

      node = queue.dequeue();
    }

    return values;
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  getHeight(currentHeight = 0) {
    // BASE CASE:
    // If the current node doesn't have a left or right child,
    // then the base case is reached, and the function can return the height.
    if (!this.left && !this.right) return currentHeight;

    // RECURSIVE CASE:
    // Otherwise, compute the new height.
    const newHeight = currentHeight + 1;

    // If there's no left child, recurse down the right subtree only,
    // passing down the height of the current node.
    if (!this.left) return this.right.getHeight(newHeight);

    // If there's no right child, recurse down the left subtree only,
    // passing down the height of the current node.
    if (!this.right) return this.left.getHeight(newHeight);

    // If both children exist, recurse down both subtrees,
    // passing down the height of the current node.
    const leftHeight = this.left.getHeight(newHeight);
    const rightHeight = this.right.getHeight(newHeight);

    // Return the greater of the left or right subtree heights.
    return Math.max(leftHeight, rightHeight);
  }

  isBST() {
    // Use the existing `dfsInOrder()` method to traverse the tree.
    const values = this.dfsInOrder();

    // Check if the array returned by the in-order DFS is a sorted array.
    for(let i = 1; i < values.length; i++) {
      // Compare the current and previous values.
      if(values[i] < values[i-1]) {
        return false;
      }
    }
    return true;
  }

  findKthLargestValue(k) {
    // Use the existing `dfsInOrder()` method to traverse the tree.
    const values = this.dfsInOrder();
    const kthIndex = values.length - k;

    // Ensure that the index is within the bounds of the array.
    if (kthIndex >= 0) {
      return values[kthIndex];
    } else {
      console.error("k value exceeds the size of the BST.");
    }
  }

  
}

module.exports = BinarySearchTree;
