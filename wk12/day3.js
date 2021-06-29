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
    }

      queueIsPalindrome() {
    // - [ ] queueIsPalindrome
    //   - Write a method on the Queue class that returns whether or not the queue is a palindrome
    
  }
}