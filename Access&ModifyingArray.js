//forwars traversing index moves from 012 so on
let status = ["pass", "fail", "skip"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);

//forwars traversing index moves from -1 -2 -3 so on, "skip" will be at -1 position "fail" at -2, "pass" at -3. reverse order.
//Also its mandiatory to use ArrayName.at(-index) using at is must in reverse order. 
//Ex : status.at(-3) NOTE we not using [] rater using() for -ve indexing
console.log(status.at(-3));
console.log(status.at(-2));
console.log(status.at(-1));

/*push - adds element to the last
pop - removes ele at the last
unshift - adds element at the 1st position
shift - removes 1st element  */


//adding to array - always adds at end. 4 will be added to the end and gives size
let vir = [10, 20, 30];
vir.push(4);
console.log(vir); //[10 20 30 4]

//Remove from end and gives size
vir.pop(); //removes last item,4 removed o/p [10 20 30]
console.log(vir);

//to add at starting of the array use unshift, this will add to star and gives size
vir.unshift(90);
console.log(vir); //(4) [90, 10, 20, 30]

//to remove the starting(first) element of the array use shift, this will remove 1st element and gives size
vir.shift(90);
console.log(vir); //(3) [10, 20, 30]

//Adding in  the middle of the element.
let x = [1, 2, 3, 4];
x.push(4, 5, 6);
console.log(x);//(7) [1, 2, 3, 4, 4, 5, 6]
x.splice(2, 1); // from 2nd index remove the 1st element
console.log(x); //(6) [1, 2, 4, 4, 5, 6]

x.splice(2, 0, 99)
console.log(x) //to add the element in middle, 2nd index, 
//0- delete count is 0 so nothing no deleting, just add it with 99. o/p >>  (7) [1, 2, 99, 4, 4, 5, 6]

x.splice(2, 2, 96)
console.log(x)//to add the delete in middle, 2nd index, 
//1- delete count is 0 so nothing no deleting, just add it with 99. o/p >>  (6) [1, 2, 96, 4, 5, 6]

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(1, 2, 8, 9);
console.log(arr);
//from index 1 2 ele will be replaced.
//(7) [1, 2, 3, 4, 5, 6, 7]
//(7) [1, 8, 9, 4, 5, 6, 7]