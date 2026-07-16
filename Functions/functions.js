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