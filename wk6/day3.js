/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

// const nums1 = [1, 3, 5, 6]
// const searchNum1 = 4
// const expected1 = false

// const nums2 = [4, 5, 6, 8, 12]
// const searchNum2 = 5
// const expected2 = true

// const nums3 = [3, 4, 6, 8, 12]
// const searchNum3 = 3
// const expected3 = true

function binarySearch(sortedNums, searchNum) {
    mid = Math.floor(sortedNums.length/2); // it's okay to use a variable since we want it to get re-initialized with every call

    // base case(s)
    if(sortedNums[mid] == searchNum){
        return true;
    } else if (mid == 0){
        return false;
    } 
    // recursive calls
    else if (sortedNums[mid] > searchNum){
        return binarySearch(sortedNums.slice(0, mid), searchNum);
    } else if (sortedNums[mid] < searchNum){
        return binarySearch(sortedNums.slice(mid+1), searchNum);
    }

}
console.log(binarySearch([1,1,2,3,4,5,5,6,7], 6));
console.log(binarySearch([1,1,2,3,4,5,5,6,7], 8));
console.log(binarySearch([1,1,2,3,4,5,5,6,7], 1));



/*****************************************************************************/

/*
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

// const str1 = "abc";
// const expected1 = "cba";

// const str2 = "";
// const expected2 = "";

function reverseStr(str) {
    // base case
    if (str == ""){
        return "";
    } else {
    // recursive call
        return reverseStr(str.slice(1)) + str[0];
    }
}
console.log(reverseStr("Hello World"));