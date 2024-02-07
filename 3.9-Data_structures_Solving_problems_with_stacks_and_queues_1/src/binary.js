
const Queue = require("./lib/queue");

const binary = (max) => {
  const queue = new Queue();
  const result = [];

  // Enqueue the string '1'
  queue.enqueue("1");

  // Iterate from 1 to max
  for (let i = 1; i <= max; i++) {
    // Dequeue a value from the queue
    const value = queue.dequeue();

    // Push the value into result
    result.push(value);

    // Append a '0' to the value and enqueue it
    queue.enqueue(value + "0");

    // Append a '1' to the value and enqueue it
    queue.enqueue(value + "1");
  }

  return result;
};

module.exports = binary;
