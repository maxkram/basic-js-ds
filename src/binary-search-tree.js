const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.t = [];
  }

  root() {
    if (!this.t.length) {
      return null;
    } else {
      this.t.data = this.t[1];
      return this.t;
    }
  }

  add(data) {
    let newNode = this.inner(data);
    if (!newNode.length) {
      newNode[0] = [];
      newNode[1] = data;
      newNode[2] = [];
    }
  }

  inner(data) {
    let node = this.t;
    while (node.length > 1) {
      if (node[1] > data) {
        node = node[0];
      }
      if (node[1] < data) {
        node = node[2];
      }
      if (node[1] == data) {
        return node;
      }
    }
    return node;
  }

  has(data) {
    let node = this.inner(data);

    return Boolean(node.length);
  }

  find(data) {
    let node = this.inner(data);
    if (!node.length) {
      return null;
    } else {
      this.t.data = node[1];
      return this.t;
    }
  }

  remove(data) {
    let remove = this.inner(data);
    if (!remove.length) {
      return;
    }
    if (remove[0].length && remove[2].length) {
      let newPos = remove[2];
      while (newPos[0].length) {
        newPos = newPos[0];
      }
      newPos[0] = remove[0];

      remove[0] = remove[2][0];
      remove[1] = remove[2][1];
      remove[2] = remove[2][2];
    } else if (remove[0].length) {
      remove[2] = remove[0][2];
      remove[1] = remove[0][1];
      remove[0] = remove[0][0];
    } else if (remove[2].length) {
      remove[0] = remove[2][0];
      remove[1] = remove[2][1];
      remove[2] = remove[2][2];
    } else {
      while (remove.length > 0) {
        remove.pop();
      }
    }
  }

  min() {
    let t = this.t;
    while (t[0].length) {
      t = t[0];
    }
    return t[1];
  }

  max() {
    let t = this.t;
    while (t[2].length) {
      t = t[2];
    }
    return t[1];
  }
}

module.exports = {
  BinarySearchTree,
};
