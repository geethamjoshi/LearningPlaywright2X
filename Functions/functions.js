/*Basic function - takes no argument and no return value. function do not return anything 
while creating function if we pass values its called arguments */

//defenition of function
function greet() {
    console.log("Hi, Welcome to learning Playwright");
}

//function calling - while calling function if we pass values its called arguments
greet();

console.log("**********************************************************************************");
/*Function wuith argument and no return type */

function greetByName(name) {
    console.log("Hi", name);
}
greetByName("Geetha");
let d = greetByName("sammu");
console.log(d); //result is undefines as function is not returning anything

console.log("**********************************************************************************");
/*Function wuith no argument but return type */

function goTo() {
    console.log("gave money");
    return "Geetha"
}

let msg = goTo();
console.log(msg);

console.log("**********************************************************************************");
/*Function with argument and return type */
function sum(a, b) {
    return (a + b);
}

let sumval = sum(5, 4);
console.log(sumval);

function greetmsg(msg) {
    return `HEllo, ${msg}`; //template litrals
}

let gmsg = greetmsg("Welcome");
console.log(gmsg);

console.log("**********************************************************************************");
//FUNCTION WITH DEFAULT PARAM FUNCTION

function retry(testName, maxRetry = 3, delay = 100) {
    console.log(`Retrying ${testName} up to ${maxRetry} times with delay ${delay}ms`);
}

retry("LoginTest"); //default values from function parameters
retry("PaymentTest", 5, 200);//argument values overrides parameter values

console.log("**********************************************************************************");


function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3];
add(...num);

const res1 = add();
console.log(res1);

function loginTest(name) {
    console.log(name);
}
let a = loginTest("Login");
console.log(a); /*Login
undefined 
undefined because fun is not returning anything still we are assigning */

console.log("**********************************************************************");
/**Function declarations (like function greet(...) { ... }) are hoisted completely to the top of their scope.

That means the entire function definition is available before any code runs.

So when you call greet("Virat") before the function is defined in the source code, it still works — because the function is hoisted.

No TDZ here: TDZ applies to let and const variables (and class declarations), not to function declarations. */

greet("Virat")

function greet(msg) {
    console.log(msg);
}

console.log("**********************************************************************");
/**this and above prog - functions are fully hosted. so the o/p will be virat no tdz */
greetmsg("Virat")

function greetmsg(msg1) {
    return 'Hello, ${msg1}';
}
console.log("**********************************************************************");

/**What happens
const sayHi = ... is a function expression assigned to a constant.

Variables declared with const (or let) are hoisted but stay uninitialized until the declaration line is executed.

The period between the start of the scope and the actual initialization is the TDZ.

So when you call sayHi("Geetha") before the declaration, JavaScript tries to access sayHi while it’s still in the TDZ → ReferenceError. */

/*sayHi("Geetha")

const sayHi = function (name) {
    console.log(`Hi ${name}`);
}*/

console.log("**********************************************************************");
/**✅ Key Takeaways
Global scope: Accessible everywhere in the file/program.

Local scope: Accessible only inside the function/block where declared.

Trying to access a local variable outside its scope → ReferenceError. */

let env = "staging"; //global scope can be accessed inside the functions

function setupConfig() {
    let time = 3000; //local scope withing the function
    console.log(env); // global variable can be accessed inside the functions
    console.log(time); //can access local variable
}

setupConfig()
console.log(env);
console.log(time); // time is local to setupConfig() function.hence cannot be accessed out.

console.log("**********************************************************************");
/*Nested Scope */

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

        inner();
        console.log(y);
    }
}

