/*Old way
const greet = function (bname) {
    return `Hello, ${bname}`;
};

let g = greet("Geetha");
console.log(g); // Hello, Geetha

New way with arrow function 
const greet = bname => `Hello, ${bname}`;

let g = greet("Geetha");
console.log(g); // Hello, Geetha

Removes the function keyword.

Parentheses around the parameter (bname) are optional since there’s only one.

No need for return or curly braces when the body is a single expression — it’s implicitly returned. 

Note : if we do not have a return value then we cannot use arrow function
*/

const greet = bname => bname
console.log(greet("Hello Geetha"));

/*greet - function name
bname = parameter
bname = argument */

const sum = (a, b) => a + b;
let resSum = sum(5, 8);
console.log(resSum);

const printit = name => console.log(name);
printit("Sameeksha");

console.log("****************************************************************");
/*if function takes 0 parameters */
const val = () => "Hi";
console.log(val());

console.log("****************************************************************");

const validateStatus = status => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine");
}
validateStatus(201);
