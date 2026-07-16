/*storing entire function ina variable this is called Functiona as Expression
meaning you can define them inline and assign them to variables, pass them as arguments, 
or return them from other functions.
This is different from a function declaration, which always starts with the function keyword at the top level.*/

const greet = function (bname) {
    return `Hello, ${bname}`;
}

let g = greet("Geetha");
console.log(g);
console.log(greet("Anita"));