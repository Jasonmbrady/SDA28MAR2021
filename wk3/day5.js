/*
  Zip Arrays into Map
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value
 */

// const keys1 = ["abc", 3, "yo"]
// const vals1 = [42, "wassup", true]
// const expected1 = {
//   abc: 42,
//   3: "wassup",
//   yo: true,
// }

// GIVEN: kayArr.length === valueArr.length

function zipArraysIntoMap(keyArr, valueArr) {
    //Your Code here
    let obj = {};
    for(let i = 0; i < keyArr.length; i++){
        obj[keyArr[i]] = valueArr[i];
    }
    return obj;
}

/*****************************************************************************/

/*
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

// const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

function invertObj(obj) {
    let newObj = {};
    for (const [key, value] of Object.entries(obj)){
        newObj[value] = key;
    }
    return newObj;
}