/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
      - solution.hasOwnProperty("a") -> returns boolean
    Python: key in dict
      - "a" in solution:

*/

// const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
    let freq = {};
    for(let i =0; i < arr.length; i++){
        if(freq.hasOwnProperty(arr[i])){
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
  }
  
console.log(frequencyTableBuilder(arr2))
  
  /*****************************************************************************/
  
  /*
    Reverse Word Order
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
  */
  
  // const str1 = "This is a test";
  // const expected1 = "test a is This";
  
  function reverseString(str) {
    let output = "";
    let word = ""
    for(let i = 0; i< str.length; i++){
        if(str[i] !== " "){
            word += str[i];
        } else {
            output = word + " " + output;
            word = "";
        }
    }
    output = word + " " + output;
    output.trim();
    return output;
  }
  
console.log(reverseString("This is a test"))
  