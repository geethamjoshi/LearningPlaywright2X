//Sorting the array - By default they are sorted laxographivally like strings. if we need proper sorting thethen use a,b

let srt = ["a", "g", "e", "r", "a", "c"];
srt.sort();
console.log(srt); //alphabet sort.

let num = [3, 1, 4];
console.log(num.sort());

let ls = [1, 50, 15, 90, 73, 9]
console.log(ls.sort()); //(6) [1, 15, 50, 73, 9, 90] only the 1st number are sorted. elements are sorted based on 1st number this is called laxographic sorting.

//to achieve proper sorting
console.log(ls.sort((a, b) => a - b)); //ascending order small to big.  
//(6) [1, 9, 15, 50, 73, 90]

console.log(ls.sort((a, b) => b - a)); //decending orderbig big to small
//(6) [90, 73, 50, 15, 9, 1]

console.log("----------------------------------")

/*Slicing Array always works on principle (start, index-1)
Original array list is not modified */
let arr = [0, 5, 2, 6, 1, 6];

console.log(arr.slice(1, 3));//start position(index) > 5; end >3-1=2 i.e >2nd position(index) O/P : (2) [5, 2]
console.log(arr.slice(2, 4));//start position > 2(index); end : 4-1 3 so 3rd position(index) 6 >> (2) [2, 6]
console.log(arr.slice(2, 3)); //5
console.log(arr.slice(2, 6)); //[2, 6, 1, 6] 
console.log(arr.slice(3)); //[6, 1, 6] >> starts from 3rd position/index till end
console.log(arr.slice(-3)); // "-" means reverse order i.e form last(6). -3 position will be starting from 6 till end [6,1,6]
/*index   [0, 1, 2, 3, 4, 5]
let arr = [0, 5, 2, 6, 1, 6];
-ve index [-6,-5,-4,-3,-2,-1] */
console.log(arr.slice(0));//prints all elements as index is starting from 0

console.log("----------------------------------")
/* Splice - Purpose: Changes the original array by adding/removing elements. 
start: Index where changes begin.
deleteCount: Number of elements to remove.
item1, item2...: Elements to insert at start.
Returns: An array of removed elements.
original array will be modified.*/

let arr = [1, 2, 3, 4];
let removed = arr.splice(1, 2, 99, 100);
console.log(arr);     // [1, 99, 100, 4]
console.log(removed); // [2, 3]
