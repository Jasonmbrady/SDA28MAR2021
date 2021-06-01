/*
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//                            A
const numsA = [1, 2, 2, 2, 7]
//                            B
const numsB = [2, 2, 6, 6, 7, 8, 9, 10]

const expected = [1, 2, 2, 2, 6, 6, 7, 8, 9, 10]
/*
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(sortedA, sortedB) {
    // YOUR CODE HERE
    let solution = [];
    let idxA = 0;
    let idxB = 0;
    while (idxA < sortedA.length && idxB < sortedB.length){
        if (sortedA[idxA] === sortedB[idxB]){
            solution.push(sortedA[idxA]);
            idxA++;
            idxB++;
        } else if (sortedA[idxA] < sortedB[idxB]){
            solution.push(sortedA[idxA]);
            idxA++;
        } else {
            solution.push(sortedB[idxB]);
            idxB++;
        }
    }

    if (idxB < sortedB.length){
        for (let i = idxB; i< sortedB.length; i++){
            solution.push(sortedB[i]);
        }
    } else if (idxA < sortedA.length){
        for (let i = idxA; i< sortedA.length; i++){
            solution.push(sortedA[i]);
        }
    }
    return solution;
}

console.log(orderedMultisetUnion(numsA, numsB));