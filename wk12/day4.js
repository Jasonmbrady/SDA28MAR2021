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
        return this.head == null;
    }

    size(){
        // Your Code Here
        // Return Int (size)
        if (this.isEmpty()){
            return 0;
        }
        else {
            let counter = 0
            let runner = this.head;
            while (runner != null){
                counter++;
                runner = runner.next;
            }
            return counter;
        }
    }

    addToBack(val){
        // Your Code Here
        // Return Int (new length)
        if (this.isEmpty()){
            this.tail = new Node(val);
            this.head = this.tail;
        } else {
            let newTail = new Node(val);
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
            return this.size();
        }
    }

    addToFront(val){
        // Your Code Here
        // Return Int (new length)
        if (this.isEmpty()){
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let newHead = new Node(val);
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
            return this.size();
        }
    }

    removeHead(){
        // Your Code Here
        // Return Head.data
        if (this.isEmpty()){
            return null;
        } else {
            let headVal = this.head.data;
            if (this.head === this.tail){
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return headVal;
        }
    }

    removeTail(){
        // Your Code Here
        // Return Tail.data
        if (this.isEmpty()){
            return null;
        } else {
            let tailData = this.tail.data;
            if (this.head === this.tail){
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return tailData;
        }
    }

    removeVal(val){
        // Your Code Here
        // Finds first node with data === val and removes them from the list.
        // Return boolean (whether a node was removed)
        if (this.isEmpty()){
            return false;
        }
        else {
            let runner = this.head;
            while (runner !== null){
                if (runner.data === val){
                    if (runner.next){
                        runner.next.prev = runner.prev;
                    } else {
                        this.tail = runner.prev;
                    }
                    if (runner.prev){
                        runner.prev.next = runner.next;
                    } else {
                        this.head = runner.next;
                    }
                    return true
                }
                runner = runner.next
            }
            return false;
        }
    }

    removeAllVal(val){
        // Your Code Here
        // Finds and removes ALL nodes where data === val.
        // Return int (number of nodes removed)
        if (this.isEmpty()){
            return 0;
        } else {
            let runner = this.head;
            let counter = 0;
            while (runner !== null){
                if (runner.data === val){
                    if (runner.next){
                        runner.next.prev = runner.prev;
                    }
                    if (runner.prev){
                        runner.prev.next = runner.next;
                    }
                    counter++;
                }
                runner = runner.next;
            }
            return counter;
        }
    }
}