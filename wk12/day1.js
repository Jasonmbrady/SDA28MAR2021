class Stack {
    // Last In First Out
  
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @return {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
      this.items = []
    }
  
    // methods go here

    push(data) {
        // Add new item to top of stack
      this.items[this.size()] = data;
      return this.size();
    }
    pop() {
        // Remove item from top of stack and return
      if (this.isEmpty() === false){
        const popped = this.items[this.size() - 1];
        this.items.length--;
        return popped;
      }
    }
    isEmpty() {
        // return T if stack is empty or F if not
        return this.size() === 0;
    }
    size() {
        //return number of items in stack
        return this.items.length;
    }
    peek() {
        // look at top item without removing
        return this.items[this.size() - 1]
    }
  }
  