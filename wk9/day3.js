/*
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
  {
      firstName: "Joe",
      lastName: "Doesnthavealastname"
  },
  {
      firstName: "ohno",
      lastName: "Doesnthavealastname"
  }
]

const searchFor1 = "Jo"
const searchBy1 = "firstName"
// const expected1 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "John",
//     lastName: "Fawn",
//   },
// ]

const searchFor2 = "Ohn"
const searchBy2 = "firstName"
// const expected2 = []
// // Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "dO"
const searchBy3 = "lastName"
// const expected3 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
// ]

// // Bonus
// const searchFor4 = "E"
// const searchBy4 = "lastName"
// const searchMethod4 = "includes"
// const expected4 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Eddy",
//     lastName: "Lee",
//   },
// ]

function filterByKey(items, searchFor, searchBy) {
    return items.filter(item => 
        item[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())
    );
}




console.log(filterByKey(people, searchFor1, searchBy1));
console.log("****************************************");
console.log(filterByKey(people, searchFor2, searchBy2));
console.log("****************************************");
console.log(filterByKey(people, searchFor3, searchBy3));
