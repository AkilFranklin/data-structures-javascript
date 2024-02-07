function josephus(list, m) {
    let length = list.length;
  if (length === 0 || m === 0) {
    return null;
  }

  let currentNode = list.head;
  while (length !== 1) {
    for (let i = 0; i < m; i++) {
        currentNode = currentNode.next;
    }
    if (head === currentNode.next) {
        list.head = head.next;
    }
    currentNode.next = currentNode.next.next;
    length--;
  }

  return currentNode.value;
}

module.exports = josephus;
