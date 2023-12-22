const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if(this.root() === null){
      this.rootNode = newNode;
    }else{
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(rootNode, newNode){
    if(newNode.value < rootNode.value){
      if(rootNode.left === null){
        rootNode.left = newNode;
      }else{
        this.insertNode(rootNode.left, newNode);
      }
    }else{
      if(rootNode.right === null){
        rootNode.right = newNode;
      }else{
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data) !== null ? true : false;
  }

  find(data) {
    const resultNode = this.search(this.rootNode, data);
    return resultNode ? resultNode.data : null;
  }

  // Helper method for search
  search(node, data) {
    if (node === null || node.data === data) {
      return node;
    }
  
    if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return this.search(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};