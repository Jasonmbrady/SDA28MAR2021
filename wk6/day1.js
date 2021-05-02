// Recursion

// Base case(s)
// Forward movement

// return value or function call
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

function sumArr(nums, i = 0) {
    // base case
    if (i == nums.length){
        return 0;
    }
    return nums[i] + sumArr(nums, i+1)
    // forward motion
    // return sumArr(some stuff in here)
}
console.log(sumArr([1,2,3]));

// sumArr(nums, 0)
//   return 1 + sumArr(nums, 1)
//     return 2 + sumArr(nums, 2)
//       return 3 + summArr(nums, 3)
//         return 0
//       return 3 + 0 = 3
//     return 2 + 3 = 5
//   return 1 + 5 = 6
// 6
  
  /* ******************************************************************************** */
  
  /*
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
  */
  
  // const num1 = 5
  // const expected1 = 15
  // // Explanation: (1+2+3+4+5)
  
  // const num2 = 2.5
  // const expected2 = 3
  // // Explanation: (1+2)
  
  // const num3 = -1
  // const expected3 = 0
  
  function recursiveSigma(n) {
    // Your Code Here
    if (n < 1){
        return 0;
    }
    return n + recursiveSigma(n-1)
  }
