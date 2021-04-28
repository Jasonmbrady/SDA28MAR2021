/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

// const us_dollar = {
//   quarter: 25,
//   dime: 10,
//   nickel: 5,
//   penny: 1,
// }

const cents1 = 25
// const expected1 = { quarter: 1 }

 const cents2 = 50
// const expected2 = { quarter: 2 }

const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

 const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

// % Operator, divides two values returns the remainder 10%3 = 1

function fewestCoinChange(cents) {
    let changeBack = {};
    let remaining = cents;
    if (Math.floor(remaining/25) > 0){
        changeBack.quarter = Math.floor(remaining/25);
        remaining = remaining % 25;
    }
    if (Math.floor(remaining/10) > 0){
        changeBack.dime = Math.floor(remaining/10);
        remaining = remaining % 10;
    }
    if (Math.floor(remaining/5) > 0){
        changeBack.nickel = Math.floor(remaining/5);
        remaining = remaining % 5;
    }
    if (remaining > 0){
        changeBack.penny = remaining;
    }
    return changeBack;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));

/* ******************************************************************************** */

/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

 const nums1 = [3, 0, 1];
// const expected1 = 2;

 const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing
 const nums3 = [0,1,6,5,3,2];
/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

// const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

// const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) {
    let sum = 0;
    let arrSum = 0;
    for(let i=0; i < nums.length; i++){
        sum += i;
        arrSum += nums[i];
    }
    if (sum - arrSum == 0){
        return null;
    } else {
        sum += nums.length;
        return sum - arrSum;
    }
}
console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));