//declaring variables

let addStack1 = document.getElementById('addStack1');
let addStack2 = document.getElementById('addStack2');
let addStack3 = document.getElementById('addStack3');

let addStack1btn = document.getElementById('addStack1btn');
let addStack2btn = document.getElementById('addStack2btn');
let addStack3btn = document.getElementById('addStack3btn');

let showTreebtn = document.getElementById('showTreebtn');
let showTree = document.getElementById('showTree');

//defining functions
//defining stack using objects (code of xabadu)

class Stack {
    constructor() {
      this.stack = {};
      this.count = 0;
    }
  
    push(element) {
      this.stack[this.count] = element;
      this.count++;
      return this.stack;
    }
  
    pop() {
      this.count--;
      const element = this.stack[this.count];
      delete this.stack[this.count];
      return element;
    }
  
    peek() {
      return this.stack[this.count - 1];
    }
  
    size() {
      return this.count;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  //defining BST using objects

  function Node(id, value) {
    this.id = id;
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
    this.duplicates = 0;
  }
  
  Node.prototype.insert = function(node) {
    if (node.value < this.value) {
      this.height--;
      if (this.left) {
        return this.left.insert(node);
      }
      this.left = node;
    }
  
    if (node.value > this.value) {
      this.height++;
      if (this.right) {
        return this.right.insert(node);
      }
      this.right = node;
    }
  
    if (node.value === this.value) {
      this.duplicates++;
    }
  }
  
  Node.prototype.inOrderTraversal = function(callback) {
    if(this.left) {
      this.left.inOrderTraversal(callback);
    }
  
    callback(this);
  
    if (this.right) {
      this.right.inOrderTraversal(callback);
    }
  }

  Node.prototype.preOrderTraversal = function(callback) {

    callback(this);
    
    if(this.left) {
      this.left.preOrderTraversal(callback);
    }
  
    if (this.right) {
      this.right.preOrderTraversal(callback);
    }
  }

  Node.prototype.postOrderTraversal = function(callback) {

    if(this.left) {
      this.left.postOrderTraversal(callback);
    }
  
    if (this.right) {
      this.right.postOrderTraversal(callback);
    }

    callback(this);
  }
  
  
  // ==========================================================
  
  
  function BinarySearchTree() {
    this.root = null;
    this.nid = 0;
    this.length = 0;
  }
  
  BinarySearchTree.prototype.insert = function(value) {//value = 10
    if(!value) return;
  
    let node = new Node(this.nid++, value);//nid = 0, value = 10
    this.length++;//length = 1
  
    if (!this.root) {
      this.root = node;
      return this.length;
    }
  
    this.root.insert(node);
  }
  
  BinarySearchTree.prototype.search = function(value) {
    let node = this.root;
  
    while(node) {
      if (value > node.value) {
        node = node.right;
      }
      else if (value < node.value) {
        node = node.left;
      }
      else {
        return node;
      }
    }
    console.log('Not found');
  }
  
  BinarySearchTree.prototype.inOrderTraversal = function (callback = (node)=>console.log(node)) {
    let node = this.root;
  
    if(node && !node.left && !node.right) {
      return callback(node.value);
    }
  
    node.inOrderTraversal(callback);
  } 

  //events listener
  let bst = new BinarySearchTree();
  
  addStack1btn.addEventListener("click", function(){
    
    let stack1 = new Stack();

    // stack1.push("lisset");
    bst.insert(stack1.push(addStack1.value));
    console.log(stack1);
    console.log(bst);
  });

  addStack2btn.addEventListener("click", function(){
    
    let stack2 = new Stack();

    // stack1.push("lisset");

    bst.insert(stack2.push(addStack2.value));
    console.log(stack2);
    console.log(bst);
  });

  addStack3btn.addEventListener("click", function(){
    
    let stack3 = new Stack();

    // stack1.push("lisset");

    bst.insert(addStack3.value);
    console.log(stack3);
    console.log(bst);
  });

  console.log(bst);

  showTreebtn.addEventListener('click',function(){
    // showTree.innerHTML = JSON.stringify(bst);
    showTree.innerHTML = `
    <div>root: ${bst.root.value}</div>
    <div>left: ${bst.root.value}</div>
    <div>right: ${bst.root.value}</div>
    `
    
  });