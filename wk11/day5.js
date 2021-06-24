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
concat(addList) {
    if (this.isEmpty()){
        // if empty, assign this to addList and return;
        this.head = addList.head;
        return this;
    } else {
        // find last node
        runner = this.head;
        while (runner.next !== null){
            runner = runner.next;
        }
        // set last node.next to addList.head, creating a chain
        runner.next = addList.head;
        return this;
    }
}

/**
 * Finds the node with the smallest number as data and moves it to the front
 * of this list.
 * @return {SinglyLinkedList} This list.
 */
moveMinToFront() {
    if (this.isEmpty()){
        return this;
    }
    // track smallest value
    let minVal = this.head.data;
    // refer to the current node with smallest value
    let minNode = this.head;
    // used to track node to cut from
    let prevNode;
    let runner = this.head;
    // This will not run at all if this.head is the only node
    while (runner.next !== null){
        // compare data to minVal, if smaller, replace data and minNode reference
        if (runner.next.data < minVal){
            minVal = runner.next.data;
            minNode = runner.next;
            // Assign/reassign prevNode for cutting out minNode
            prevNode = runner;
        }
        runner = runner.next;
    }
    if (minNode !== this.head){
        // cut minNode out
        prevNode.next = prevNode.next.next;
        // place it at the front
        minNode.next = this.head;
        this.head = minNode;
    }
    return this;
}

/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * @param {any} val The value in the node that the list should be split on.
 * @return {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {
    // Create a new list to populate with nodes
    const newList = new SinglyLinkedList;
    if (this.isEmpty){
        // return an empty list
        return newList;
    } else if (this.head.data === val){
        // edge case for if this.head.data === val
        newList.head = this.head;
        // sets this to an empty list and returns full list as new list
        this.head = null;
        return newList;
    } else {
        runner = this.head;
        while (runner.next !== null){
            // iterate through list checking node data for val
            if (runner.next.data === val){
                // Set head of newList to the node with val for data
                newList.head = runner.next;
                // setting runner.next to null both cuts the list and stops 
                // the while loop.
                runner.next = null;
            } else {
                runner = runner.next;
            }
        }
        // returns sublist if val was found, or empty list if it wasn't
        return newList;
    }
}

 
}
  
