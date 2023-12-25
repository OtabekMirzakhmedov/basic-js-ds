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

  remove(data) {
    this.rootNode = this.deleteNode(this.rootNode, data);

  }

  deleteNode(node, value){
    if(node === null){
      return node
    }
    if(value < node.data){
      node.left = this.deleteNode(node.left, value)
    }else if(value > node.data){
      node.right = this.deleteNode(node.right, value)
    } else{
      if(!node.left && !node.right){
        return null
      }
      if(!node.left){
        return node.right;
      }else if (!node.right){
        return node.left
      }
      node.data = this.findMin(node.right)
      node.right = this.deleteNode(node.right, node.data)
    }
    return node;

  }



  min() {
    return this.findMin(this.rootNode);
  }

  findMin(node){
    if(!node.left){
      return node.data;
    }else{
      return this.findMin(node.left);
    }
  }

  max() {
    return this.findMax(this.rootNode);
  }

  findMax(node){
    if(!node.right){
      return node.data;
    }else{
      return this.findMax(node.right);
    }
  }
}



module.exports = {
  BinarySearchTree
};