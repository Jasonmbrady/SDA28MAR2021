/*
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty)
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

// const nums1 = [5, 2, 3]
// const expected1 = 1

// const nums2 = [5, 2, 2, 3]
// const expected2 = 1

// const nums3 = [5]
// const expected3 = -1

function indexOfMinVal(nums) {
    // given an array (arr) of integers, iterate throught he array. return smallest integer. This will require storing each integer (minVal)found
    // replacing only if there is a smaller (<).  Also need to store the index (idx) of that integer, because that is what we return.
    // if no integers are found, return -1;
    if(nums.length < 1){
      return -1;
    }
    var minVal = nums[0];
    var idx = 0;
    for(var i=1; i<nums.length; i++){
      if(nums[i] < minVal){
        minVal = nums[i];
        idx = i;
      }
    }
    return idx;
  }
  // console.log(indexOfMinVal(nums1));
  // console.log(indexOfMinVal(nums2));
  // console.log(indexOfMinVal(nums3));

  
  /* ******************************************************************************** */
  
  /*
    Array: Second-Largest
    Return the second-largest element of an array, or null if there is none.
    Bonus: do it with one loop and no nested loops
  */
  
  const nums1 = [2, 3, 1, 4]
  // const expected1 = 3
  
  const nums2 = [3, 3]
  // const expected2 = null
  
  const nums3 = [2]
  // const expected3 = null
  
  const nums4 = [1,2,5,4]
  // const expected4 = null
  
  function secondLargest(nums) {
    // given an array (nums) of integers, find the SECOND largest number and return it. Otherwise return null.
    // need two variables. One for largest (max), one for second largest (second).
    // return null if nums.length < 2
    // declare max = nums[0], iterate through nums replacing max when nums[i] > max
    // when replacing max with nums[i], FIRST replace second with max.
    // return second
    if(nums.length < 2){
      return null;
    }      
    var max = nums[0];
    var second = null;
    for(var i=1; i<nums.length; i++){
      if(nums[i] > max){
        second = max;
        max = nums[i];
      } else if(nums[i] > second){
        second = nums[i];
      }
    }
    return second;
  }
  console.log(secondLargest(nums1));
  console.log(secondLargest(nums2));
  console.log(secondLargest(nums3));
  console.log(secondLargest(nums4));
