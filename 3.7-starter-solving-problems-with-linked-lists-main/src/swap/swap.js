/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (!this.head || x === y) {
    return this; // If the list is empty or x and y are the same, return the list unchanged
  }

  let x_next = null;
  let x_prev = null;
  let y_prev = null;
  let current = this.head;

  // Find x and y, and their previous nodes
  while (current) {
    if (current.data === x) {
      x_next = current.next;
      break;
    }
    x_prev = current;
    current = current.next;
  }

  current = this.head; // Reset current to the head

  while (current) {
    if (current.data === y) {
      break;
    }
    y_prev = current;
    current = current.next;
  }

  if (!x_prev) {
    this.head = y;
  } else {
    x_prev.next = y;
  }

  if (!y_prev) {
    this.head = x;
  } else {
    y_prev.next = x;
  }

  const temp = x.next;
  x.next = y.next;
  y.next = temp;

  return this;
}

module.exports = swap;
