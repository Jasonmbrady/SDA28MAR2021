class Node {
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null
    }

    isEmpty() {
        return this.root === null;
    }
  
    insert(newVal) {
      if (isNaN(newVal)){
        return `${newVal} must be a number!`
      }
        if (this.isEmpty()){
          this.root = new Node(newVal);
        } else {
          let runner = this.root;
          while (true) {
            if (newVal < runner.data){
              if (runner.left === null){
                runner.left = new Node(newVal);
                return this;
              } else {
                runner = runner.left;
              }
            } else if (newVal > runner.data){
              if (runner.right === null){
                runner.right = new Node(newVal);
                return this;
              }
              else {
                runner = runner.right;
              }
            }
            else {
              console.log(`${newVal} is already in the tree!`);
              return this;
            }
          }
        }
    }
  
    insertRecursive(newVal, runner = this.root) {
      if (this.isEmpty()){
        this.root = new Node(newVal);
      }

      if (newVal < runner.data){
        if (runner.left === null){
          runner.left = new Node(newVal);
          return this;
        } else {
          return this.insertRecursive(newVal, runner.left);
        }
      } else if (newVal > runner.data){
        if (runner.right === null){
          runner.right = new Node(newVal);
          return this;
        } else {
          return this.insertRecursive(newVal, runner.right);
        } 
      } else {
        console.log(`${newVal} is already in the tree!`);
        return this;
      }
    }
  }