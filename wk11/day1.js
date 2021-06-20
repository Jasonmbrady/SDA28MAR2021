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
}
  
  // const emptyList = new SinglyLinkedList();
  // const node = new Node('first')
  // console.log(emptyList.head)
  // emptyList.head = node
  // console.log(emptyList.head)
  // console.log(emptyList.hello())
  // const node2 = new Node('second')
  
  // console.log(emptyList)
  // // emptyList.head.next = node2
  // node.next = node2
  // console.log(emptyList)
  
  // How to iterate through Array?
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  
  // }
  // How to iterate through LinkedList?
  
  // let runner = emptyList.head
  // console.log(runner.data)
  // while (runner.next !== null) {
  //   runner = runner.next
  // }
  // console.log(runner.data)
  
  // ************************************************************************************************
  
//     const single = new SinglyLinkedList;
//   console.log(single.isEmpty());
  
//   single.insertAtBack(1)
//   single.insertAtBack(2)
//   single.insertAtBack(3)
//   console.log(JSON.stringify(single))
//   console.log(single.isEmpty())
   const single2 = new SinglyLinkedList;
  single2.seedFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9])
  single2.runner = single2.head;
    while( single2.runner !== null){
        console.log(single2.runner.data);
        single2.runner = single2.runner.next;
    }
 
//   {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":{"data":6,"next":{"data":7,"next":{"data":8,"next":{"data":9,"next":null}}}}}}}}}
  