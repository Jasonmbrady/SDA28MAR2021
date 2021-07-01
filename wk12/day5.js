// - PriorityQueue (create enqueue and dequeue methods)
//   - Design a new PriorityQueue class where the queue maintains an ascending order when items are added based on a queue item's provided priority integer value. A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.

class Node {
    constructor(data, priority) {
      // data is the given item to be added to the queue.
      this.data = data
      this.priority = priority
    }
  }
  
  /**
   * Class to represent a PriorityQueue with methods that enforce the correct
   * order of queue items.
   */
  class PriorityQueue {
    // An array is used to implement priority
    constructor() {
      this.items = []
    }
  
    /**
     * Adds the new item in the correct location in the queue based on priority.
     * @param {any} element The item to add.
     * @param {number} priority The importance, low is more important.
     * @return {number} The new length.
     */
    enqueue(element, priority) {
        // YOUR CODE HERE
        if (this.items.length === 0){
            this.items.push(new Node(element, priority));
        } else {
            let queued = false;
            for(let i=this.items.length -1; i >= 0; i--){
                if(this.items[i].priority > priority){
                    this.items.splice (i, 0, new Node(element, priority));
                    queued = true;
                    break;
                }
            }
            if (!queued) {
                this.items.splice(0, 0, new Node(element, priority))
            }
        }
        return this.items.length;
    }
  
    /**
     * Removes and returns the most prioritized item.
     */
    dequeue() {
        return this.items.pop().data;
    }
  }
  // ******************************************************** //

  class PriQNode {
    constructor(val, pri) {
      this.data = val
      this.next = null
      this.pri = pri
    }
  }
  
  class LinkedListPriorityQueue {
    constructor() {
      this.head = null
    }

    enqueue(val, pri) {
        let newNode = PriQNode(val,pri);
        if (this.head === null){
            this.head = newNode;
        } else {
            let runner = this.head;
            if (newNode.pri < this.head.pri){
                newNode.next = this.head;
                this.head = newNode;
            } else {
                while (runner.next !== null && newNode.pri >= runner.next.pri){
                    runner = runner.next;
                }
                newNode.next = runner.next;
                runner.next = newNode;
            }
        }
    }
  
    dequeue() {
        if(this.head === null){
            return null;
        } else {
            let value = this.head.data;
            this.head = this.head.next;
            return value;
        }
    }
  }