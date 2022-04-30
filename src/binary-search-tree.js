const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    }
    else this.addLeaves(newNode, this.rootNode);
  }

  addLeaves(newNode, node) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else this.addLeaves(newNode, node.left);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addLeaves(newNode, node.right);
    }
  }

  has(data, node = this.rootNode) {
    if (node === null) return false;
    if (node.data < data) return this.has(data, node.right);
    else if (node.data > data) return this.has(data, node.left);
    else if (node.data == data) return true;
    else return false;
  }

  find(data, node = this.rootNode) {
    if (node.data < data) {
      if (node.right === null) return null;
      else return this.find(data, node.right);
    }
    else if (node.data > data) {
      if (node.left === null) return null;
      else return this.find(data, node.left);
    }
    else if (node.data == data) return node;
    else return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(data, this.rootNode);
  }

  removeNode(data, node = this.rootNode) {
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeNode(data, node.left);
      return node;
    }
    else if (data > node.data) {//2
      node.right = this.removeNode(data, node.right);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.findMin(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(newNode.data, node.right);
      return node;
    }
  }

  findMin(node) {
    if (node.left === null) return node;
    else return this.findMin(node.left);
  }

  findMax(node) {
    if (node.right === null) return node;
    else return this.findMax(node.right);
  }

  min() {
    if (this.rootNode.data === null) return null;
    const min = this.findMin(this.rootNode);
    return min ? min.data : null;
  }

  max() {
    if (this.rootNode.data === null) return null;
    const max = this.findMax(this.rootNode);
    return max ? max.data : null;
  }
}

module.exports = {
  BinarySearchTree
};