//Arrays are collectionn of items. Used for data driven testing.
let fruits = []; //empty array
let a = [1, 2, 3];
//length=3, index=0,1,2
console.log(a[0]);
console.log(a[1]);
console.log(a[3]);//undefined error in Jscript.(index out of bound in java)

//in Jscript arrays can hold multipal data types in single array
let mixdata = [20, "pass", 'c', true, null]

//creating an array 2 ways
let am = ["apple", "banana", "chicoo"];

//or cuonstructor type Array is a constructor function or a built in class.
let score = new Array(3);//empty array need to add elements, here 3 is the size.
let score2 = new Array(1, 2, 3);
console.log(score); //Empty Array of size3
console.log(score2); //o/p [1 2 3]

//or
//let fruits = new Array("apple", "banana", "cherry");

//or
let num = Array.of(10, 20, 30);
console.log(num);

//or
let chars = Array.from("hello");
console.log(chars);
// this will convert hello to characters["h","e","l","l","o","w"]
/*Array.from("hello") takes the string and converts it into an array, where each character becomes an element. */

