let str = "Hi my name is geetha";
console.log(str.includes("geetha"));
console.log(str.startsWith("Hi"));
console.log(str.startsWith("Hi"));
console.log(str.endsWith("geetha"));

console.log(str.indexOf("geetha"));
/*Explanation
str is the string: "Hi my name is geetha".
.indexOf("geetha") searches for the substring "geetha" inside str.
Indexing in JavaScript strings starts at 0. 
H (0) i (1)   (2) m (3) y (4)   (5) n (6) a (7) m (8) e (9)   (10) i (11) s (12)   (13) g (14) e (15) e (16) t (17) h (18) a (19)
"geetha" starts at index 14.
👉 If the substring doesn’t exist, .indexOf() returns -1.*/


console.log(str.lastIndexOf("geetha")); // 15
/*Explanation
.lastIndexOf("geetha") searches for the last occurrence of "geetha" in the string.

Since "geetha" appears only once (starting at index 14), both .indexOf("geetha") and .lastIndexOf("geetha") return the same value.

 If "geetha" appeared multiple times, .lastIndexOf() would give you the index of the final occurrence. For example:
 
 let str = "geetha says hi, geetha smiles";
console.log(str.indexOf("geetha"));     // 0
console.log(str.lastIndexOf("geetha")); // 15
*/

console.log(str.search("my"));
//or
console.log(str.search(/name/)); // "/<string>/" is a REGX which is used to find a substring in an string