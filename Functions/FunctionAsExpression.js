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

console.log("**********************************************************************");
/*Block Scope (let / const)
Variables declared with let or const are scoped to the block {} they’re in. 
Here, y and z vanish once the block ends. They cannot be accessed outside.*/

function demoLetConst() {
    if (true) {
        let y = 20;   // block-scoped
        const z = 30; // block-scoped
        console.log("Inside block:", y, z); // ✅ 20, 30
    }
    console.log("Outside block:", y); // ❌ ReferenceError
    console.log("Outside block:", z); // ❌ ReferenceError
}

demoLetConst();

/**Quick Analogy
var is like a VIP pass: once you’re inside the function, you can roam anywhere.

let and const are like restricted passes: you can only stay inside the block you were issued in. */