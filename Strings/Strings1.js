//String declartion
/*🔑 Key points in your code
Single quotes ' ' and double quotes " " both work for string literals.

Backticks ` ` are for template literals, which allow:

Interpolation: ${expression} → evaluates inside the string. */

let a = "Hello";              // double quotes
let b = 'Geetha';             // single quotes
let c = `Hello ${b}! 2+2=${2 + 2}`; // template literal with interpolation
let d = `fgfdgfdg
dfgdfgdfg
dgdfgdf
fgdfgdfg`; // multiline string


console.log(String(200)); //"200" converts number to string
console.log(String(null)); //"null" converts null to string
console.log(String(true)); //"true"converts true/boolean to string
console.log(String([1, 2, 3, 4])); //"1,2,3,4"converts true/boolean to string

//string is data type
//String - helps to create a new string, its an interface

/*String() converts values into their string representation.

Numbers → "200",

null → "null",

Boolean → "true" or "false". */