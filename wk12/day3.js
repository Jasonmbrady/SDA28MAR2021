class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
}

class Queue {
    constructor() {
      this.head = null;
    }
  
    enqueue (val) {
        if (this.isEmpty()){
            this.head = new Node(val);
        } else {
            let runner = this.head;
            while (runner.next !== null){
                runner = runner.next;
            }
            runner.next = new Node(val);
        }
    }
  
    dequeue () {
        if (this.isEmpty()){
            return null;
        } else {
            let dequeued = this.head;
            this.head = this.head.next;
            return dequeued.data;
        }

    }
  
    isEmpty () {
        return this.head === null;
    }
  
    size () {
      if (this.isEmpty()){
          return 0;
      } else {
          let counter = 1;
          let runner = this.head;
          while (runner.next !== null){
              counter++;
              runner = runner.next;
          }
          return counter;
      }

    }
  
    front () {
      return this.head.data;
    }
    
    compareQueues(q) {
      // - [ ] compareQueues
      //   - Write a method on the Queue class that, given another queue, will return whether they are equal (same items in same order).
      if (this.size() !== q.size()){
        return false;
      } 
      let counter = this.size();
      while (counter > 0){
        if (this.head.data !== q.head.data){
          return false;
        }
        this.enqueue(this.dequeue());
        q.enqueue(q.dequeue());
        counter--;
      }
      return true;
      }
      
  queueIsPalindrome() {
    if(this.isEmpty){
      return false;
    } else if (this.head.next === null){
      return true;
    } else {
      const reverse = new Stack();
      let runner = this.head;
      while (runner !== null){
        reverse.push(runner.data);
        runner = runner.next;
      }
      runner = this.head;
      let value;
      while (runner !== null){
        value = reverse.pop();
        if (runner.data !== value){
          return false;
        }
        runner = runner.next;
      }
      return true;
    }
  }
}

class Stack {
  constructor(){
    this.head = null;
  }
  isEmpty(){
    return this.head === null;
  }

  push(val){
    if (this.isEmpty()){
      this.head = new Node(val);
    } else {
      let runner = this.head;
      while (runner.next !== null){
        runner = runner.next;
      }
      runner.next = new Node(val);
    }
  }

  pop(){
    if (this.isEmpty()){
      return null;
    } else {
      let runner = this.head;
      while (runner.next !== null){
        runner = runner.next;
      }
      const popped = runner.next;
      runner.next = null;
      return popped.data;
    }
  }
}