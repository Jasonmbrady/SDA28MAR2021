/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
]
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
]
const expected1 = [
  { name: "Peanut Butter", quantity: 70 },
  { name: "Grain of Rice", quantity: 9001 },
  { name: "Royal Jelly", quantity: 20 },
]

// const newInv2 = []
// const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

// const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
// const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
  function updateInventory(newInv, currInv) {
    // YOUR CODE HERE
    for(let i = 0 ; i < newInv.length ; i++){
      for(let j = 0 ; j < currInv.length ; j++){
       if(currInv[j].name===newInv[i].name){
         currInv[j].quantity+=newInv[i].quantity;
         break;
       }
       else if(j===currInv.length-1){//case not in currInv
         currInv.push({"name":newInv[i].name,"quantity":newInv[i].quantity})
       }
      }
    }
    console.log(currInv[0])
    return ;
}
}

console.log(updateInventory(newInv1, currInv1))

/*****************************************************************************/

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes";
// const strB1 = "eys";
// const expected1 = true;

// const strA2 = "yes";
// const strB2 = "eYs";
// const expected2 = true;

// const strA3 = "no";
// const strB3 = "noo";
// const expected3 = false;

// const strA4 = "silent";
// const strB4 = "listen";
// const expected4 = true;

function isAnagram(s1, s2) {
  function isAnagram(s1,s2){
    // check whether s1 and s2 are the same length
    if (s1.length !== s2.length){
        return false;
    }
    freqS1 = {};
    freqS2 = {};
    for (let i=0; i < s1.length; i++){
        if (freqS1.hasOwnProperty(s1[i])){
            freqS1[s1[i]] += 1;
        } else {
            freqS1[s1[i]] = 1
        }
        if (freqS2.hasOwnProperty(s2[i])){
            freqS2[s2[i]] += 1;
        } else {
            freqS2[s2[i]] = 1
        }
    }
    for (item in freqS1){
        if (!freqS2.hasOwnProperty(item) || freqS2[item] !== freqS1[item]){
            return false
        }
    }
    return true;
}

let str1 = "listen";
let str2 = "silent";
let str3 = "xxyzzy";
let str4 = "xxxyzz";
let str5 = "Jason";
let str6 = "Ghaida";
console.log(isAnagram(str1, str2));
console.log(isAnagram(str3, str4));
console.log(isAnagram(str5, str6));

}


