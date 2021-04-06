// Fib Recursive

function rFib(idx){
    //code goes here
    //base case
    if(idx === 0){
        return 0;
    }
    if(idx === 1){
        return 1;
    }
    return rFib(num - 1) + rFib(num - 2);
}


/*
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
*/

function reverse(arr){
    //code
}

/* ********************************************************** */

/*
  Recreate the built in .slice method
  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)
  What should you do if the provided end index is out of bounds?
*/
function slice(arr, start, end){
    //code
}