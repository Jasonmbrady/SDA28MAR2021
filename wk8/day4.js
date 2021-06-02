// Interview Algo given to alumni

/*
  You are given a list of integers. Find all the consecutive sets of
  integers that adds up to the sum passed in as one of the inputs.
*/

 const nums1 = [2, 5, 3, 6, 7, 23, 12]
// const sum1 = 16
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ]

// // Bonus:
 const nums2 = [2, 5, 3, 6, 7, 0, 0, 4, 12]
// const sum2 = 16
// const expected2 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(nums, targetSum) {
// YOUR CODE HERE
    const sums = []; 
    for (let i=0; i < nums.length; i++){// i is left pointer
        const currSlice = [];
        let sum = 0;
        let right = i;

        while (sum <= targetSum && right < nums.length){
            if (sum + nums[right] <= targetSum){
                sum += nums[right];
                currSlice.push(nums[right]);
                right++;
                if (sum === targetSum){
                    sums.push(currSlice.slice());
                }
            } else {
                break;
            }
        }
    }
    return sums;
}
console.log(findConsqSums(nums2, 16))
console.log(findConsqSums(nums1, 16))
/*****************************************************************************/

/*
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

// const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
// const expected1 = [
//   { i: 4, n: 6 },
//   { i: 7, n: 10 },
// ];

function allNonConsecutive(sortedNums) {
// YOUR CODE HERE
    const solution = [];
    for (let i=1; i< sortedNums.length; i++){
        const currNum = sortedNums[i];
        const prevNum = sortedNums[i-1];

        if (currNum - 1 !== prevNum){
            solution.push({
                idx: i,
                num: currNum,
            })
        }
    }
    return solution;
}
// console.log(allNonConsecutive(nums1))