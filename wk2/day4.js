/*
  Given an array and an index,
  remove the item at that index.
  return the removed item
  No built-in array methods except pop().
*/

// const arr2 = ["a", "b", "c"]
// const removeIdx2 = 3
// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

// const arr3 = ["a", "b", "c"]
// const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
    // code here
    if(idx <0 || idx >= arr.length){
        return null;
    } // check to ensure idx is a valid index of arr
    var value = arr[idx]; // store value
    for(let i=0; i < arr.length; 1++){ // iterate through array
        arr[i] = arr[i+1]; // shift values of arr forward by 1
    }
    arr[arr.length -1] = value; // set last element to value to be  removed
    return arr.pop();
}

/* ****************************************** */

/*
  Given an array of integers, move the minimum value to the front
  return the array after done
  No built in methods
*/

// const nums1 = [1, 5, 2, 9];
// const expected1 = [1, 5, 2, 9];
// const nums2 = [3, 5, 10, 2, 6];
// expected return = [2, 3, 5, 10, 6]

function minToFront(nums) {
    // code here
    if (nums.length === 0){
        return [];
    } // empty array check

    var min = nums[0]; // initialize to first value and index
    var mindx = 0;
    for(let i=1; i<nums.length; i++){ // iterate through array
        if (nums[i] < min){
            min = nums[i];
            mindx = i; // if a new minimum is found, set trackers
        }
    }
    if (mindx === 0){
        return nums; // check if first value is smallest
    }
    for(let i = mindx; i > 0; i--) {// start at mindx and iterate backward through array
            nums[i] = nums[i-1]; // shift values toward end
    }
    nums[0] = min;
    return nums;

 
}