// Singly Linked Lists

// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/



class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null
    }
  
    isEmpty() {
        if (this.head === null){
            return true;
        } else {
            return false;
        }
    }
  
    insertAtBack(data) {
        if (this.isEmpty()){
            this.head = new Node(data);
        } else {
            let runner = this.head;
            while(runner.next !== null){
                runner = runner.next;
            }
            runner.next = new Node(data);
        }
    }
  
    seedFromArr(arr) {
        for (let i = 0; i < arr.length; i++){
            this.insertAtBack(arr[i])
        }
    }

    insertAtFront(data) {
        // if this.isEmpty, set new node to head
        if (this.isEmpty()){
            this.head = new Node(data);
        // if this is not empty, set runner to head
        } else {
            let runner = this.head;
            // now set head to a new node.
            // note that this DOES NOT change the node runner is referencing
            this.head = new Node(data);
            // set runner to this.head.next
            this.head.next = runner;
        }

    }

    removeHead() {
        // if this.isEmpty, return null and do nothing
        if (this.isEmpty()){
            return null;
        } else {
            this.head = this.head.next;
        }
    }
    
    average() {
        // if this.isEmpty, return null and do nothing
        if (this.isEmpty()){
            return null
        // if this is not empty, create sum and counter variable
        // set runner to head. As long as runner is pointing at a node
        // (runner !== null) increment sum by val and counter by one, then move 
        // runner to runner.next. Once runner is null, return sum/cnt.
        } else {
            let runner = this.head;
            let sum = 0;
            let cnt = 0;
            while (runner !== null){
                sum += runner.data;
                cnt++;
                runner = runner.next;
            }
            return sum / cnt;
        }
    }

}
  
