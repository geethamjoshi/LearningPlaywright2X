let str = " Sameeksha went to school ";
console.log(str.toUpperCase()); //SAMEEKSHA WENT TO SCHOOL 
console.log(str.toLocaleLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test:Fail. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));

//concatination
console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));
console.log(`${"Hello"} ${"World"}`);

//split will split the string with delimiter and strore/createa array with the result
let res = "Pass, Fail, Warning".split(",");
console.log(res); //(3) ['Pass', ' Fail', ' Warning']


//Split and join
let greet = "Hi!How!are!you!".split("!").join(" ");
console.log(greet); //Hi How are you 

let parts = ["2024", "26", "06"].join("_");
console.log(parts); //2024_26_06