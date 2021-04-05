/*
  Array: Concat
  .push allowed: arrName.push(newItem)
  Replicate JavaScript’s concat() which combines two arrays into one NEW array
  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

function concat(arr1, arr2) {
    var newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}
/* *********************************************************** */

/* Fibonacci - Create a function to generate Fibonacci numbers.  
In this famous mathematical sequence, each number is the sum of the previous two, 
starting with values 0 and 1.  Your function should accept one argument, 
an index into the sequence (where 0 corresponds to the initial value, 
4 corresponds to the value four later, etc).  
Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  
If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 
of this assignment. */

// [0, 1, 1, 2, 3, 5, 8]

// Non Recursive
function iterFib(num){
    var fibArr = [0,1];
    for(let i = 2; i <= num; i++){
        // add the two preceding index values, push to firArr;
        fibArr.push( fibArr[i-1] + fibArr[i-2])
    }
    return fibArr[num]
}