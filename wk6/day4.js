/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5
const expected1 = 5

const num2 = 10
const expected2 = 1

const num3 = 25
const expected3 = 7

const num4 = 25761
// 21
// 3
const expected4 = 3

function sumToOneDigit(num) {
    // Your Code Here
}

// BONUS CHALLENGE
// Generate Anagrams
// takes in a string, outputs an array of strings of all possible character combinations.

// const str1 = "cat"
// expected: ["cat", "cta", "tac", "tca", "act", "atc"]
function genAnagramIterative(str){
    // Your Code Here
}

function genAnagramRecursive(str){
    // Your Code Here
}