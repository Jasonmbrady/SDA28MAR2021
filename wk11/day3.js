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
        if (this.isEmpty()){
            this.head = new Node(data)
        } else {
            let runner = this.head;
            this.head = new Node(data);
            this.head.next = runner;
        }

    }

    removeHead() {
        if (this.isEmpty()){
            return null;
        } else {
            this.head = this.head.next;
        }
    }
    
    average() {
        if (this.isEmpty()){
            return null
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
    // return true if a node in the list contains val
    // otherwise return false
    contains(val){
        if(this.isEmpty()){
            return false;
        }
        else {
            let runner = this.head;
            while (runner !== null){
                if (runner.data === val){
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }
    // Optional bonus challenge, implement contains recursively
    containsRecursive(val, runner=this.head){
        // YOUR CODE HERE
        // BASE CASE(S)
        if (runner === null) {
            return false;
        }
        if (runner.data === val) {
            return true;
        }
        return this.containsRecursive(val, runner.next)
    }
    // removes the last node of the list
    removeTail(){
        if (this.isEmpty()){
            return null;
        } else if (this.head.next === null){
            let data = this.head.data
            this.head = null;
            return data;
        } else {
            let runner = this.head;
            while (runner.next.next !== null){
                runner = runner.next;
            }
            let data = runner.next.data
            runner.next = null;
            return data;
        }
        // YOUR CODE HERE
    }
}
  
