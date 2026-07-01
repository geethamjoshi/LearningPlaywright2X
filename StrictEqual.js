//=== Strictly equal to >> compairs values and types
let i = 10;
console.log(i === "10"); // false, because strict equality does not allow type coercion
console.log(0 === ""); //false, because strict equality does not allow type coercion. "" is a string, 0 is a number