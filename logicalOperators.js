let a = true;
let b = false;
console.log(a || b); //true, because at least one of the operands is true
console.log(a && b); //false, because both operands are not true    
console.log(!a); //false, because a is true and the NOT operator negates it

//datatype of null is object
console.log(typeof null); //object