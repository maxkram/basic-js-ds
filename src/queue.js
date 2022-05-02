const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.h = null;
    this.l = 0;
  }

  getUnderlyingList() {
    return this.h;
  }

  enqueue(value) {
    this.next = null;
    if (this.l === 0) {
      this.h = new ListNode(value);
    } else {
      let c = this.h;

      while (c.next) {
        c = c.next;
      }

      c.next = new ListNode(value);
    }

    this.l++;
  }

  dequeue() {
    const c = this.h;
    this.h = c.next;

    this.l--;
    return c.value;
  }
}

module.exports = {
  Queue,
};
