/*
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

// const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

// const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

// const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

function deDupe(nums) {
    let freq = {};
    for (let i=0; i < nums.length; i++){
        if (!freq.hasOwnProperty(nums[i])){
            freq[nums[i]] = true;
        }
    }
    nums = [];
    for (const num in freq){
        nums.push(num);
    }
    return nums;
}

/*****************************************************************************/

/*
  Array: Mode
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

// const nums1 = [];
// const expected1 = [];

// const nums2 = [1];
// const expected2 = [1];

// const nums3 = [5, 1, 4];
// const expected3 = [];

 const nums4 = [5, 1, 4, 1];
// const expected4 = [1];

 const nums5 = [5, 1, 4, 1, 5];
// const expected5 = [5, 1];
//  - order doesn't matter

function mode(nums) {
    let freq = {};
    let maxReps = 0;
    let solution = [];
    for (let i=0; i<nums.length; i++){
        if (freq.hasOwnProperty(nums[i])){
            freq[nums[i]]++;
            if (freq[nums[i]] > maxReps){
                maxReps = freq[nums[i]];
            }
        } else {
            freq[nums[i]] = 1;
            if (freq[nums[i]] > maxReps){
                maxReps = freq[nums[i]];
            }
        }
    }
    for (const num in freq){
        if (freq[num] === maxReps){
            solution.push(num)
        }
    }
    if (Object.keys(freq).length === solution.length){
        return [];
    } else {
        return solution;
    }
}
console.log(mode(nums4));
console.log(mode(nums5));