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

    /**
 * Retrieves the data of the second to last node in this list.
 * return the data of the second to last node or null if there is no
 *    second to last node.
 */
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
 /**
  * Removes the node that has the matching given val as it's data.
  * return true if a node was removed or false if not.
  * Only removes the first node with matching data.
  * 
  * BONUS: Remove ALL nodes with matching data, returns true if at least 1 
  * node was removed.
  */
 removeVal(val) {
     if (this.isEmpty()){
         return false;
     }
     let runner = this.head;
     let removed = false;
     // iterate through list, looking at runner.next.data to see if it matches val. if it does, cut it out of the list.
     while (runner.next !== null){
         while(runner.next.data === val){
             // This while loop allows me to remove multiple nodes in a row
             // that all have data that matches val before moving runner.
             runner.next = runner.next.next;
             removed = true;
         }
         runner = runner.next;
     }
     return removed;
 }
 
 // EXTRA
 /**
  * Inserts a new node before a node that has the given value as its data.
  * @param {any} newVal The value to use for the new node that is being added.
  * @param {any} targetVal The value to use to find the node that the newVal
  *    should be inserted in front of.
  */
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
 
}
  
