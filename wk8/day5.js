// From a technical interview with an AWS engineer

/*
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3]
const k1 = 2
const expected1 = [1, 2]
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3]
const k2 = 1
const expected2 = [0]
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 2, 3]
const k3 = 3
const expected3 = [1, 2, 3]
/*
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.
*/

function kMostFrequent(nums, k) {
    // YOUR CODE HERE
    const freq = {};
    const invFreq = {};
    const solution = [];
    let max = 0;

    for (const num of nums){ // build frequency table
      if (freq.hasOwnProperty(num)){
        freq[num]++;
        if (freq[num] > max){
          max = freq[num]
        }
      } else {
        freq[num] = 1;
        if (max === 0){
          max = 1;
        }
      }
    }
    // build a 'reverse' frequency table where the key is the frequency 
    // and the value is an array of all numbers that have that frequency.
    for (const numKey in freq){ 
      const frequency = freq[numKey]
      if (invFreq.hasOwnProperty(frequency)){
        invFreq[frequency].push(parseInt(numKey))
      } else {
        invFreq[frequency] = [parseInt(numKey)]
      }
    }

    let nextFrequency = max;

    while (solution.length < k && nextFrequency > 0){
      if (invFreq.hasOwnProperty(nextFrequency) && invFreq[nextFrequency].length > 0){
        solution.push(invFreq[nextFrequency].pop())
      } else {
        nextFrequency--;
      }
    }
    return solution;
}
console.log(kMostFrequent(nums1, k1));
console.log(kMostFrequent(nums2, k2));
console.log(kMostFrequent(nums3, k3));

/*****************************************************************************/
console.log("*****************************************************")
// Asked in "Python interview with a LinkedIn engineer: Matching pairs"

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums11 = [2, 11, 7, 15];
const targetSum11 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected11 = [0, 2];

function twoSum(nums, targetSum) {
    // YOUR CODE HERE
    const freq = {};

    for (let i=0; i < nums.length; i++){
      const num = nums[i]
      if (num > targetSum){
        continue;
      }
      diff = targetSum - num;
      if (freq.hasOwnProperty(diff)){
        return [freq[diff], i]
      }
      freq[num] = i;
    }
    return [];
}
console.log(twoSum(nums11, targetSum11));