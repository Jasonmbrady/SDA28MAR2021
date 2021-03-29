// Probelm 1

/*
    Recreate the .push method without using the built-in .push
        Given an array and a new item, add the item to the end of the array
        return the new length of the array
*/
function push(arr, newItem){
    //Code Here
    arr[arr.length] = newItem;
    return arr.length;
}


// Problem 2

/* 
    Nth to last
        Given an array and an integer, which represents the position starting from the back (last element) of the array,
        return the nth-to-last element.
*/

function nthToLast(arr, int){
    return arr[arr.length - 1 - int]
}
