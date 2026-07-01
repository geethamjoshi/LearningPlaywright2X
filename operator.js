//Assignment operators
let a = 10;

///Arithmetic operators
let b = 5;
let c = a + b; // Addition
console.log(c);
let d = a - b; // Subtraction
console.log(d);
let e = a * b; // Multiplication
console.log(e);
let f = a / b; // Division
console.log(f);
let g = a % b; // Modulus
console.log(g);
let h = a ** b; // Exponentiation
console.log(h);

//compound assignment operators
a += 5; // Equivalent to a = a + 5
console.log(a);
a -= 5; // Equivalent to a = a - 5  
console.log(a);
a *= 5; // Equivalent to a = a * 5
console.log(a);
a /= 5; // Equivalent to a = a / 5
console.log(a);

//Comparison operators  
//= Equal to
let i = 10;

///== Equal to (loose equality) >> Compairs values only
console.log(i == "10"); // true, because loose equality allows type coercion. 
console.log(0 == ""); //true, because loose equality allows type coercion."" converted to 0 and then compared with 0 
console.log(0 == false); //true, because loose equality allows type coercion. false converted to 0 and then compared with 0 
console.log(null == undefined); //true, because loose equality allows type coercion. null and undefined are considered equal in loose equality  
console.log(true == "1"); //true, because loose equality allows type coercion. true converted to 1 and then compared with 1   
console.log(true == 2); //false, because loose equality allows type coercion. true converted to 1 and then compared with 2
console.log("" == "0"); //false, because loose equality allows type coercion. "" is an empty string and "0" is a non-empty string, so they are not equal

//=== Strictly equal to >> compairs values and types
console.log(i === "10"); // false, because strict equality does not allow type coercion
console.log(0 === ""); //false, because strict equality does not allow type coercion. "" is a string, 0 is a number
//type of null is object
console.log(null === undefined);
//type of undefined is undefined, type of null is object. so false

//> Greater than
console.log(i > 5); //true, because 10 is greater than 5

//< Less than
console.log(i < 15); //true, because 10 is less than 15
//10<15 or 10=15 

//>= Greater than or equal to
console.log(i >= 10); //true, because 10 is equal to 10

//<= Less than or equal to
console.log(i <= 10); //true, because 10 is equal to 10 

//OR gate
let j = 10;
let k = 5;
console.log(j || k); //true, because at least one of the values is truthy

