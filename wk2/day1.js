// This weeks theme: Arrays

/*
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().
*/

// const arr1 = [1, 2, 3]
// const expected1 = 1
// // after running function arr1 should now be:
// const arr1Expected = [2, 3]

// const arr2 = ["a", "b", "c", "d"]
// const expected2 = "a"
// // after running function arr2 should now be:
// const arr2Expected = ["b", "c", "d"]

function shift(arr) {
    var tempArr = [] // empty array to temporaroly contain values from arr
    for(var i=1; i<arr.length; i++){
        tempArr.push(arr[i]); // add all but the first element of arr (arr[0]) to tempArr
    }
    tempArr[tempArr.length] = arr[0]; // add arr[0] on the end of tempArr
    arr = tempArr; // set arr to the new, reordered array
    return arr.pop(); // pop off the last value of arr (which was previously arr[0])
  }
  
  /* ******************************************************************************** */
  
  /*
    Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
    return the new length of the array.
    Do this without using any built-in array methods.
  */
  
  // const arr1 = [1, 2, 3]
  // const newItem1 = 0
  // const expected1 = 4
  // // after function is called, arr1 should be:
  // const arr1Expected = [0, 1, 2, 3]
  
  // const arr2 = []
  // const newItem2 = "a"
  // const expected2 = 1
  // // after function is called, arr2 should be:
  // const arr2Expected = ["a"]
  
  function unshift(arr, newItem) {
    var tempArr = [newItem]; // create a new temporary array to hold values. Add newItem as first value
    for(i=0; i < arr.length; i+){
        tempArr.push(arr[i]); // push values of arr into tempArr in order, placing them after newItem
    }
    arr = tempArr; // set arr equal to the newly created array
    return arr.length; // return the length of the newly modified array
  }
 
