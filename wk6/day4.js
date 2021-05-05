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
// isolate each digit, and add them together
// if the sum >= 10, repeat
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
    //Base Case
    if (num == 0){
        return 0;
    }
    var sum = num%10 + sumToOneDigit(parseInt(num/10))
    if (sum >= 10){
        return sumToOneDigit(sum);
    }
    else {
        return sum;
    }
}
console.log(sumToOneDigit(10))
console.log(sumToOneDigit(5))
console.log(sumToOneDigit(85629))

// BONUS CHALLENGE
// Generate Anagrams
// takes in a string, outputs an array of strings of all possible character combinations.

const str1 = "cats"
// expected: ["cat", "cta", "tac", "tca", "act", "atc"]
function anagrams(str, memo="", arr=[]) {
    if (str.length == 0) {
      arr.push(memo)
      return arr
    }
    for (var i = 0; i < str.length; i++) {
      anagrams(str.slice(0, i) + str.slice(i + 1, str.length), memo + str[i], arr)
    }
    return arr
  }
  console.log(anagrams(str1));
  

