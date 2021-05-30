/*
  Efficiently combine two already sorted multiset arrays
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7]
const numsB1 = [2, 2, 6, 6, 7]
const expected1 = [2, 7]

const numsA2 = [0, 1, 2, 2, 2, 7, 10, 12, 15]
const numsB2 = [2, 2]
const expected2 = [2]

function orderedIntersection(sortedA, sortedB) {
    // PSUEDO: Iterate through the shortest array, adding unique values to frequency table. Iterate through longer array. If arr[i] exists on frequency table, add to solutions. return solutions. 
    let solution = [];
    let freq = {};
    if (sortedA.length < sortedB.length){
        for (let i=0; i < sortedA.length; i++){
            if(!freq.hasOwnProperty(sortedA[i])){
                freq[sortedA[i]] = true;
            }
        }
        for (let i=0; i < sortedB.length; i++){
            if (sortedB[i] > sortedA[sortedA.length - 1]){
                return solution;
            } else if (freq.hasOwnProperty(sortedB[i]) && sortedB[i] !== solution[solution.length - 1]){
                solution.push(sortedB[i]);
            }
        }
        return solution;
    }
    else {
        for (let i=0; i < sortedB.length; i++){
            if(!freq.hasOwnProperty(sortedB[i])){
                freq[sortedB[i]] = true;
            }
        }
        for (let i=0; i < sortedA.length; i++){
            if (sortedA[i] > sortedB[sortedB.length - 1]){
                return solution;
            } else if (freq.hasOwnProperty(sortedA[i]) && sortedA[i] !== solution[solution.length - 1]){
                solution.push(sortedA[i]);
            }
        }
        return solution;
    }
}
console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));