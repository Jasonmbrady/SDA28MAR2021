class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }

class Queue {
    constructor() {
      // 0 is the front
      // arr.length-1 is the back
      this.head = null;
    }
  
    enqueue (val) {
    // Add a value to the back of Queue and return new length
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
      // Remove and return value from front

    }
  
    isEmpty () {
      // return T if empty, F if not
        return this.head === null;
    }
  
    size () {
      // return number of items in the Queue
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
      // Like Peek, returns the value of the item in the front without removing it from the queue.
      return this.head.data;

    }
  
  }