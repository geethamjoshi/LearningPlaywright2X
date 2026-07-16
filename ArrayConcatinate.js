//concatinate 2 arrays
let a = [1, 2, 3];
let b = [5, 6, 7];
let c = a.concat(b);
console.log(c)

/*spread concatination - 3dots ... is a spread which means all elements */
let d = [...a, ...b]; //all element of a concatinated with all ele of b
console.log(d);

//join
let s = ["pass", "fail", "norun"].join("|");
console.log(s); /* pass|fail|norun */

let q = ["pass", "fail", "norun"].join("");
console.log(q); //passfailnorun

console.log("----------------------------------")

/*To check if its an array 
Array.isArray() - isArray() is a static method on the Array class in JavaScript.*/
let m = ["pass", "fail", "norun"]
console.log(Array.isArray(m));

let u = Array.isArray([4, 5, 6, 8])
console.log(u);

console.log("----------------------------------")
es = [2, 3, 4, 5];
let res = es.every(s => s > 4)
console.log(res);