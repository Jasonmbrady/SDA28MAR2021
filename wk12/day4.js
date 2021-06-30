// Doubly Linked Lists

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    isEmpty(){
        // Your Code Here
        // Return boolean
    }

    size(){
        // Your Code Here
        // Return Int (size)
    }

    addToBack(val){
        // Your Code Here
        // Return Int (new length)
    }

    addToFront(val){
        // Your Code Here
        // Return Int (new length)
    }

    removeHead(){
        // Your Code Here
        // Return Head.data
    }

    removeTail(){
        // Your Code Here
        // Return Tail.data
    }

    removeVal(val){
        // Your Code Here
        // Finds first node with data === val and removes them from the list.
        // Return boolean (whether a node was removed)
    }

    removeAllVal(val){
        // Your Code Here
        // Finds and removes ALL nodes where data === val.
        // Return int (number of nodes removed)
    }
}