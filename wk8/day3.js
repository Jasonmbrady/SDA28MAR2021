/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const test1SetA = [1, 2]
const test1SetB = [2, 1]
const expected1 = []
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3]
const test2SetB = [4, 5, 6]
const expected2 = [1, 2, 3, 4, 5, 6]
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4]
const test3SetB = [1, 2, 3, 5, 5, 2]
const expected3 = [4, 5]
/*
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

// METHOD 1: Nested loops -> O(n^2) quadratic run efficiency
function symmetricDifferences(setA, setB) {
    const solution = [];
    for (const num of setA){
        if (!setB.includes(num) && !solution.includes(num)){
            solution.push(num);
        }
    }
    for (const num of setB){
        if (!setA.includes(num) && !solution.includes(num)){
            solution.push(num);
        }
    }
    return solution;
}

// METHOD 2: Frequency Table/Seen Table/Hash Table -> O(n)linear run efficiency
function symmetricDifferencesFreq(setA, setB) {
    const freqA = {};
    const freqB = {};
    const solution = [];

    for (const num of setA){
        freqA[num] = "unicorns";
    }

    for (const num of setB){
        freqB[num] = "not unicorns";
    }

    for (const key in freqA){
        if (!freqB.hasOwnProperty(key))
        solution.push(parseInt(key))
    }
    for (const key in freqB){
        if (!freqA.hasOwnProperty(key))
        solution.push(parseInt(key))
    }
    return solution;
}

console.log(symmetricDifferences(test1SetA, test1SetB));
console.log(symmetricDifferences(test2SetA, test2SetB));
console.log(symmetricDifferences(test3SetA, test3SetB));
console.log(symmetricDifferencesFreq(test1SetA, test1SetB));
console.log(symmetricDifferencesFreq(test2SetA, test2SetB));
console.log(symmetricDifferencesFreq(test3SetA, test3SetB));