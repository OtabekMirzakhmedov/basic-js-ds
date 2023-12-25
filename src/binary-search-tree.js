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

  insertNode(Node, newNode){

    if(newNode.data < Node.data){
      if(Node.left === null){
        Node.left = newNode;
      }else{
        this.insertNode(Node.left, newNode);
      }
    }else{
      if(Node.right === null){
        Node.right = newNode;
      }else{
        this.insertNode(Node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data)!==null;
  }

  find(data) {
    return this.search(this.rootNode, data);

  }
  search(node, value) {
    if(!node){
      return null;
    }else {
      if (node.data === value) {
        return node;
      } else if(value < node.data){
        return this.search(node.left, value)
      }else{
        return this.search(node.right, value)
      }
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