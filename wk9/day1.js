/*
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users"
const insertData1 = { first_name: "John", last_name: "Doe" }
//const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');"

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
}
//const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);"
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) {
    let statement = `INSERT INTO ${tableName} (`;
    const keys = [];
    const vals = [];
    for (const field in columnValuePairs){
        keys.push(field);
        vals.push(columnValuePairs[field]);
    }
    for (let i = 0; i < keys.length; i++){
        if (i < keys.length - 1){
            statement += `${keys[i]}, `;
        } else {
            statement += `${keys[i]}) VALUES (`;
        }
    }
    for (let i = 0; i < vals.length; i++){
        if (typeof vals[i] === 'string'){
            statement += `\"${vals[i]}\"`;
        } else {
            statement += `${vals[i]}`;
        }
        if (i === vals.length - 1){
            statement += ");"
        } else {
            statement += ", "
        }
    }
    return statement;
}
console.log(insert("users", insertData1));
console.log(insert("users", insertData2));
/*****************************************************************************/

/*
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };
/*const expected1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
]; */

function entries(obj) {
    const solution = [];
    for (const key in obj){
        solution.push([key, obj[key]]);
    }
    return solution;
}
console.log(entries(obj1))