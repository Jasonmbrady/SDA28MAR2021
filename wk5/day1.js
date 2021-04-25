// On^2 -> Speed, Space
// On log n
// On 
// O1

// On log n
function balanceIndex(nums) {
    if (nums.length <= 2) {
        return -1;
    }

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i < nums.length; i++) {
        leftSum += nums[i - 1];
        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }
        if (leftSum == rightSum) {
            return i;
        }
        rightSum = 0;
    }
    return -1
}
/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  Return -1 if none exist.
  IF there is more than one balance point, return the index of the FIRST balance point.
*/

// const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// const nums2 = [9, 9];
// const expected2 = -1;

// On
function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1
      }
    
      let left = nums[0]
      let right = 0
    
      for (let i = 2; i < nums.length; i++) {
        right += nums[i]
      }
    
      for (let i = 1; i < nums.length - 1; i++) {
        if (left === right) {
          return i
        }
    
        right -= nums[i + 1]
        left += nums[i]
      }
      return -1

}
console.log(balanceIndex(nums1))

/*****************************************************************************/

/*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

// const nums1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {
    if (length < 2) {
        return false
      }
    
      let left = nums[0]
      let right = 0
    
      for (let i = 1; i < length; i++) {
        right += nums[i]
      }
    
      for (let i = 1; i < length; i++) {
        if (left === right) {
          return true
        }
    
        right -= nums[i]
        left += nums[i]
      }
      return false
}