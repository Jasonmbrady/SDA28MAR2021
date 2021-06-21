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
        // if this.isEmpty
        // add to head
        if (this.isEmpty()){
            this.head = new Node(data);
        } else {
        // go to the end of the list (tail)
            let runner = this.head;
            while(runner.next !== null){
                runner = runner.next;
            }
            runner.next = new Node(data);
        }
    }
  
    seedFromArr(arr) {
        // for loop
        for (let i = 0; i < arr.length; i++){
            this.insertAtBack(arr[i])
        }
    }

    insertAtFront(data) {
        // YOUR CODE HERE
    }

    removeHead() {
        // YOUR CODE HERE
    }
    
    average() {
        // YOUR CODE HERE
    }

}
  
