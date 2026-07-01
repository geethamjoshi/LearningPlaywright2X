// JavaScript literals examples

// String literal
const greeting = "Hello";
const name = 'World';
const template = `Hello, ${name}!`;

// Numeric literals
const intValue = 42;
const floatValue = 3.14;
const hexValue = 0x2A;
const binaryValue = 0b101010;
const octalValue = 0o52;
const bigIntValue = 12345678901234567890n;

// Boolean literal
const isEnabled = true;
const isDisabled = false;

// Null and undefined
let missingValue;    // undefined: declared but not initialized
const emptyValue = null; // null: explicitly assigned no value

// Object literal
const person = {
    firstName: "Geetha",
    age: 28,
    active: true,
};

// Array literal
const numbers = [1, 2, 3, 4, 5];

// Regular expression literal
const pattern = /hello/i;

// Function expression literal (named or anonymous functions are also literals in JS)
const add = function (a, b) {
    return a + b;
};

// Arrow function literal
const multiply = (a, b) => a * b;

console.log("greeting:", greeting);
console.log("template:", template);
console.log("intValue:", intValue, typeof intValue);
console.log("floatValue:", floatValue, typeof floatValue);
console.log("hexValue:", hexValue, typeof hexValue);
console.log("binaryValue:", binaryValue, typeof binaryValue);
console.log("octalValue:", octalValue, typeof octalValue);
console.log("bigIntValue:", bigIntValue, typeof bigIntValue);
console.log("isEnabled:", isEnabled, typeof isEnabled);
console.log("missingValue:", missingValue, typeof missingValue);
console.log("emptyValue:", emptyValue, typeof emptyValue);
console.log("person:", person);
console.log("numbers:", numbers);
console.log("pattern:", pattern, pattern.test("Hello"));
console.log("add(2,3):", add(2, 3));
console.log("multiply(2,3):", multiply(2, 3));

// Notes:
// - undefined is the default value for variables that are declared but not initialized.
// - null is explicitly assigned to indicate no value.
// - typeof null returns "object" due to a historical JavaScript quirk.
// - Template literals use backticks and can include expressions with ${ }.
// - Object, array, regex, function, and arrow function forms are all literal syntaxes.
