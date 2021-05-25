/*
  Stable sort.
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = []
const sortedB1 = []
const expectedMerge1 = []

const sortedA2 = [5]
const sortedB2 = [2]
const expectedMerge2 = [2, 5]

const sortedA3 = [3]
const sortedB3 = [2, 3, 4, 7]
const expectedMerge3 = [2, 3, 3, 4, 7]

const sortedA4 = [1, 2, 4, 5, 6, 9]
const sortedB4 = [3, 7, 8, 10]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function merge(left, right) {
    let result = [];
    let iRight = 0;
    let iLeft = 0;
    while ( iLeft < left.length && iRight < right.length){
        if (left[iLeft] < right[iRight]){
            result.push(left[iLeft]);
            iLeft++;
        } else {
            result.push(right[iRight])
            iRight++;
        }
    }
    if (iLeft == left.length){
        for (let i=iRight; i < right.length; i++){
            result.push(right[i])
        }
    } else {
        for (let i=iLeft; i < left.length; i++){
            result.push(left[i])
        }
    }
    return result;
}
//console.log(merge(sortedA2, sortedB2))
//console.log(merge(sortedA3, sortedB3))

/*****************************************************************************/

// Use the above recursively to sort an unsorted array
// HINT: an array of length 1 is by definition sorted!

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mergeSort(nums) {
    // YOUR CODE HERE
    if (nums.length === 1){
        return nums;
    }
    const mid = Math.floor(nums.length /2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(numsOrdered));
console.log(mergeSort(numsRandomOrder));
console.log(mergeSort(numsReversed));

