//find- returns 1st matching ele.
/*find() → returns the element itself (not index).
If no match → returns undefined.
We shd always write a condition inside find or findIndex
If you want the index, use findIndex(): */
let num = [10, 20, 30, 40, 50];
console.log(num.find(x => x === 20)); //20 1st matching element is returned in case of duplicates
console.log(num.find(x => x > 20)); // 30 >> The first element that satisfies the condition is returned.

console.log(num.findIndex(x => x > 40)); //returns the index of ele when found.o/p 4

//Iterate functions.
let test = ["Pass", "Fail", "NoRun"];
for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
}

console.log("--------------------------------------------------------------");

let res = ["chrome", "firefox", "safari", "opera", "edge"];
for (res of res) {
    console.log(res)
}

console.log("--------------------------------------------------------------");
/*Syntax
array.forEach((element, index, array) => {
    // code here
});
element = 1, 2,3 so on
index = 0,1,2,3,4
array =  complete array[1 2 3 4 5 6]
*/

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((ele, index) => {
    console.log(ele, index);
});

/* Output
1 0
2 1
3 2
4 3
5 4
6 5
 */

console.log("--------------------------------------------------------------");

let arr1 = [40, 50, 60, 90, 70]
arr1.forEach((ele, index, array) => {
    console.log(ele, index, array);
});

/*Output
40 0 (5) [40, 50, 60, 90, 70]
50 1 (5) [40, 50, 60, 90, 70]
60 2 (5) [40, 50, 60, 90, 70]
90 3 (5) [40, 50, 60, 90, 70]
70 4 (5) [40, 50, 60, 90, 70]*/

console.log("--------------------------------------------------------------");

/*Map Function -  syntax similar to ternary operators, it returs a new array but value will be different based on condition. in the 
in the below example input is [90, 86, 50, 63, 73] len of array is 5 but o/p will be ['Pass', 'Pass', 'Fail', 'Pass', 'Pass'] length is also 5 based on the condition inside
Purpose: Transforms each element of the array.
Returns: A new array of the same length.*/


let score = [90, 86, 50, 63, 73];
let grades = score.map(s => s > 60 ? "Pass" : "Fail");
console.log(grades);
//o.p (5) ['Pass', 'Pass', 'Fail', 'Pass', 'Pass']

/*
90 => 90>60 ? Pass : Fail o/p pass
86 o/p pass
50 o/p fail
63 o/p pass
73 o/p fail
*/

console.log("--------------------------------------------------------------");

/*Filter function >> keeps the elements that pass the condition remaining will be removed.
so if the initial length is 4 and after condition length reduces to 3 
Purpose: Selects elements that match a condition.
Returns: A new array with only the matching elements.*/

let sal = [25, 70, 80, 92];
let max = sal.filter(ms => ms > 25);
console.log(max);
//O/p : (3) [70, 80, 92]

console.log("--------------------------------------------------------------");
/*It reduces an array to a single value by applying a function cumulatively.
0 is teh initial value a = 0, b=5 0+5 =5 now 
5+1=6
6+2=8
8+6=14
14+3=17 */

let sum = [5, 1, 2, 6, 3];
let total = sum.reduce((a, b) => a + b, 0);
console.log(total);

console.log("--------------------------------------------------------------");
/*returns the biggest number, initially a = 0, b = 12=> 0>12=12
12>78=78; 78>25=78; 78>45=78 */

let big = [12, 78, 25, 45];
let biggest = big.reduce((a, b) => a > b ? a : b, 0);
console.log(biggest);

console.log("--------------------------------------------------------------");

let prod = [2, 8, 5, 3];
let mul = prod.reduce((a, b) => a * b, 1);
console.log(mul);

console.log("--------------------------------------------------------------");

let name = ["Geetha", "Virat", "Nuikhil", "Sammu"];
let fname = name.reduce((arr, val, index) => {
    arr[index] = val;
    return arr;
}, {});
console.log(fname);
/*
{0: 'Geetha', 1: 'Virat', 2: 'Nuikhil', 3: 'Sammu'} */

console.log("--------------------------------------------------------------");
/*Every function */
let d = [56, 85, 45, 66];
let everyd = d.every(s => s > 50);
console.log(everyd); //false 

/*every() checks if all elements in the array satisfy the condition s > 50.

Your array is [56, 85, 45, 66].

56 > 50 → true

85 > 50 → true

45 > 50 → false ❌

Since one element (45) fails the test, every() immediately returns false.
✅ Key takeaway:

every() → returns true only if all elements pass the condition.

If even one fails, the result is false.

Would you like me to also show you how some() would behave on the same array? It’s the opposite in spirit—it checks if at least one element passes the condition. */

console.log("--------------------------------------------------------------");
/*every function ex2 */

let arrShow = [200, 204, 201, 205];
let res5 = arrShow.every(d => d >= 200);
console.log(res5); //true

console.log("--------------------------------------------------------------");
/*some function - atleast 1 must pass 

Why?
some() checks if at least one element in the array satisfies the condition m > 200.
Your array is [200, 204, 201, 205].
200 > 200 → false
204 > 200 → true ✅ → stops here
Since one element (204) passes the test, some() immediately returns true. */

let valu = [200, 204, 201, 205].some(m => m > 200);
console.log(valu);//true

console.log("--------------------------------------------------------------");

/*Key takeaway:

every() → all elements must pass.
some() → at least one element must pass.*/
