const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  delete(data) {
    let node = this.head;
    let count = 0;
    while (node.data !== data && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(k) {
    let current = this.head;
    for (let i = 1; i < k; i++) {
      if (current.next) {
        current = current.next;
      }
      else return undefined;
    }
    return current;
  }

  getKthToLast (k) {
    return this.getKth(this.size() - k);
  }

  isEmpty() {
    return !this.head ? true : false;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  containsDuplicates() {
    const hasDuplicate = {};
    let node = this.head;
    while (node) {
      if (hasDuplicate[node.data]) {
        return true;
      }
      else {
        hasDuplicate[node.data] = true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
