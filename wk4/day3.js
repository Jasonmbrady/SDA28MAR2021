/*
  Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
  let freq = {parens: 0};
  for(let i = 0; i < str.length; i++){
    if(str[i] === "("){
      freq.parens++;
    } else if(str[i] ===")"){
      freq.parens--;
      if(freq.parens < 0){
        return false;
      }
    }
  }
  if (freq.parens !== 0){
    return false;
  } else {
    return true;
  }
}

// console.log(parensValid(str1));
// console.log(parensValid(str2));
// console.log(parensValid(str3));
// console.log(parensValid(str4));
/*****************************************************************************/

/*
  Braces Valid
  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

 const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

function bracesValid(str) {
  let stack = [];
  for (let i=0; i< str.length; i++){
    switch (str[i]) {
      // Open cases
      case "(":
        stack.push("paren");
        break;

      case "[":
        stack.push("bracket");
        break;

      case "{":
        stack.push("brace");
        break;
      // Close cases
      case ")":
        if (stack[stack.length-1] !== "paren"){
          return false;
        } else {
          stack.pop();
        }
        break;
      case "]":
        if (stack[stack.length-1] !== "bracket"){
          return false;
        } else {
          stack.pop();
        }
        break;
      case "}":
        if (stack[stack.length-1] !== "brace"){
          return false;
        } else {
          stack.pop();
        }
        break;

      default:
        break;
    }
  }
  if (stack.length > 0){
    return false;
  } else {
    return true;
  }
  // iterate through string. When a bracket/brace/etc opening is found, track it
  // when a closing bracket/brace/etc is found, verify that it matches the currently open set
  // if not, return false
  // if so, continue to iterate
  // if I reach the end of the string and all open brackets/braces/etc. are closed, return true.
  // else return false
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))