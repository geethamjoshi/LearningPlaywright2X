/*console.log(a);
var a = 10;

cosole.log(t)
let = 0;

cosole.log(t1)
const t1 = 0; */

/* var a = myvar();
console.log(a);
function myvar() {
    return "Hello World";
}

let a1 = val()
console.log(a1);
function val() {
    return "Hello World";
} */

/* greet(); // ReferenceError: Cannot access 'greet' before initialization
const greet = function () {
    console.log("Hi!");
};

greet(); // ReferenceError: Cannot access 'greet' before initialization
let greet = function () {
    console.log("Hi!");
};

let a1 = val()
console.log(a1);
function val() {
    return "Hello World";
} */

//console.log(a); // ❌ ReferenceError (TDZ)
let a = 10;     // TDZ ends here
console.log(a);

let count = count + 1; // ❌ ReferenceError (TDZ) as count is not initialized yet.  