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

    containsRecursive(val, runner=this.head){
        if (runner === null) {
            return false;
        }
        if (runner.data === val) {
            return true;
        }
        return this.containsRecursive(val, runner.next)
    }

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

    }

    secondToLast() {
        if (this.isEmpty() || this.head.next === null) {
            return null;
        }
        let runner = this.head;
        while (runner.next.next !== null){
            runner = runner.next;
        }
        return runner.data;
    }

    removeVal(val) {
        if (this.isEmpty()){
            return false;
        }
        while (this.head !== null && this.head.data === val){
            this.head = this.head.next;
        }
        if (this.head !== null){
        let runner = this.head;
        let removed = false;
        while (runner.next !== null){
            while(runner.next.data === val){
                runner.next = runner.next.next;
                removed = true;
            }
            runner = runner.next;
        }
        return removed;
        }
    }
    
    prepend(newVal, targetVal) {
        if (this.isEmpty()){
            return null;
        }
        let runner = this.head;
        while (runner.next !== null){
            if(runner.next.data === targetVal){
                const newNode = new Node(newVal);
                newNode.next = runner.next;
                runner.next = newNode;
                runner = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
    }

    /**
 * Concatenates the nodes of a given list onto the back of this list.
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @return {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {}

/**
 * Finds the node with the smallest number as data and moves it to the front
 * of this list.
 * @return {SinglyLinkedList} This list.
 */
moveMinToFront() {}

/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * @param {any} val The value in the node that the list should be split on.
 * @return {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {}

 
}
  
