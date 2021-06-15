/*
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  Return a new array of strings in this format: "Honorific FirstName LastName"
  Bonus: re-write it with built in functional programming methods
*/

const honorific1 = "Mr."
const names1 = []
// const expected1 = []

const honorific2 = "Sir"
const names2 = ["Sanchez, Rick", "Smith, Jerry"]
// const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"]

const honorific3 = "Mrs."
const names3 = ["HorseDoctor, Beth"]
// const expected3 = ["Mrs. Beth HorseDoctor"]

function addHonorific(honorific, fullNames) {

  const solution = [];
  for (const name of fullNames){
    let fName = "";
    let lName = "";
    let last= true;
    for(let i = 0; i < name.length; i++){
      if (name[i] !== "," && last){
        lName += name[i];
      } else if (name[i] !== ","){
        fName += name[i];
      } else { 
        last = false;
        i++;
      }
    }
    solution.push(`${honorific} ${fName} ${lName}`)
  }
  return solution;
}
// console.log(addHonorific(honorific1, names1));
// console.log(addHonorific(honorific2, names2));
// console.log(addHonorific(honorific3, names3));

/*****************************************************************************/

/*
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
  Helpful methods:
    - .split(characterToSplitOn)
      - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
      - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
  Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
// const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
// const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
// const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
// const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
// const expected5 = 0;
// // Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
// const expected6 = 1;

function compareVersionNumbers(v1, v2) {
  const arr1 = [];
  const arr2 = [];
  let partial = "";
  for (let i = 0; i < v1.length; i++){
    if (v1[i] !== "."){
      partial += v1[i]
    } else {
      arr1.push((partial))
      partial = "";
    }
  }
  arr1.push(partial);
  partial = ""
  for (let i = 0; i < v2.length; i++){
    if (v2[i] !== "."){
      partial += v2[i]
    } else {
      arr2.push((partial))
      partial = "";
    }
  }
  arr2.push(partial);
  for (let i = 0; i < arr1.length; i++){
    if (i >= arr2.length || +arr1[i] > +arr2[i]){
      return 1;
    } else if (+arr2[i] > +arr1[i]){
      return -1;
    }
  }
  if (arr1.length < arr2.length){
    return -1;
  } else {
    return 0;
  }
}
// console.log(compareVersionNumbers(test1V1, test1V2));
// console.log(compareVersionNumbers(test2V1, test2V2));
// console.log(compareVersionNumbers(test3V1, test3V2));
// console.log(compareVersionNumbers(test4V1, test4V2));
// console.log(compareVersionNumbers(test5V1, test5V2));
// console.log(compareVersionNumbers(test6V1, test6V2));

// Reem's 
function reemCompareVersionNumbers(v1, v2) {
  var i =0;
  var j =0;

  while(i < v1.length || j < v2.length){
    if(v1[i]==0 && i>0){
      i++;
      continue;
    }
    if(v2[j]==0 && j>0){
      j++;
      continue;
    }  
    if(v1[i] > v2[j] || v2.length-1 <j){
      return 1;
    }
    if(v1[i] < v2[j] || v1.length-1 <i){
      return -1;
    }
      i++;
      j++;
  }
  return 0;
}