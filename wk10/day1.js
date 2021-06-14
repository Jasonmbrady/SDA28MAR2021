/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

// const nums = [1, 4, 3, 6, 9, 2, 15]

// const callback1 = (elem) => {
//   return elem > 5
// }
// const expected1 = [6, 9, 2, 15]

// const callback2 = (elem) => {
//   return elem > 2
// }
// const expected2 = [4, 3, 6, 9, 15]

// const callback3 = (elem) => false
// const expected3 = []

// Time O(n)
// Space O(1)

function dropIt(arr, callback) {
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i])){
        return arr.slice(i);
      }
    }
    return [];
}


/*****************************************************************************/

/*
  Given to another instructor in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
*/

// const str1 = "";
// const expected1 = false;

// const str2 = "a";
// const expected2 = true;

// const str3 = "ddaa";
// const expected3 = true;
// // Explanation: "daad" or "adda"

// const str4 = "dda";
// const expected4 = true;
// // Explanation: "dad"

// const str5 = "aaadd";
// const expected5 = true;
// // Explanation: "daaad"

// const str6 = "abc";
// const expected6 = false;

function canStringBecomePalindrome(str) {
  // YOUR CODE HERE
  if (str.length === 0) {
    return false;
  }
  const charMap = {};

  for (const char of str) {
    if (charMap.hasOwnProperty(char)){
      delete charMap[char];
    } else {
      charMap[char] = true;
    }
    return Object.keys(charMap).length <= 1 ? true : false;
  }
}