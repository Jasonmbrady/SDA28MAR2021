/*
  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case
  .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World"
const strB1 = "lloeh wordl"
// const expected1 = true

const strA2 = "Hey"
const strB2 = "hello"
// const expected2 = false
// Explanation: second string is missing a "y"

const strA3 = "hello"
const strB3 = "helo"
// const expected3 = false
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello"
const strB4 = "lllheo"
// const expected4 = true

const strA5 = "hello"
const strB5 = "heloxyz"
// const expected5 = false
// Explanation: not strB5 does not have enough "l" chars.

function canBuild(s1, s2) {
    const freq1 = {};
    const freq2 = {};
    for (let i = 0; i < s1.length; i++){
        if (freq1.hasOwnProperty(s1[i].toLowerCase())){
            freq1[s1[i]]++;
        } else {
            freq1[s1[i].toLowerCase()] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++){
        if (freq2.hasOwnProperty(s2[i].toLowerCase())){
            freq2[s2[i]]++;
        } else {
            freq2[s2[i].toLowerCase()] = 1;
        }
    }
    for (const key in freq1){
        if(freq2.hasOwnProperty(key) === false || freq2[key] < freq1[key]){
            return false;
        }
    }
    return true;
}
console.log(canBuild(strA1, strB1));
console.log(canBuild(strA2, strB2));
console.log(canBuild(strA3, strB3));
console.log(canBuild(strA4, strB4));
console.log(canBuild(strA5, strB5));

/*****************************************************************************/

/*
  Given a string, find the length of the longest substring without repeating characters.
*/

// Hello how are you?
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
    let longest = 0;
    for (let i=0; i<str.length; i++){
        const seen = {};
        let partial = "";
        let j=i;
        while( j < str.length && seen.hasOwnProperty(str[j]) === false){
            seen[str[j]] = true;
            partial += str[j];
            j++;
        }
        // if (partial.length === str.length - i){
        //     return partial.length;
        // }
        if (partial.length > longest){
            longest = partial.length;
        }
    }
    return longest;
}
// console.log(lengthOfLongestSubString(str1));
// console.log(lengthOfLongestSubString(str2));
// console.log(lengthOfLongestSubString(str3));
// console.log(lengthOfLongestSubString(str4));