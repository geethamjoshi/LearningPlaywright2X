/*In while loop 
1. Initialization - outside loop
 2. Condition - is checking with while statement and loop starts.
 3. Updation of var - happens inside the loop.
 */

let attempt = 0;
while (attempt < 3) {
    console.log(attempt);
    attempt++;
}
//in this below ex loop will never execute as the condition always remains false. this is one of the disadvantage of while loop

let a = 10;
while (a < 10) {
    console.log(a);
    a++;
}

//Do while loop - makes sure loop executed atleast once.
let a1 = 10;
do {
    console.log(a1);
    a1++;
} while (a1 < 10);

//Interview Questions

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}

let m = 0;
do {
    console.log(m);
    m--;
} while (m > 0);


//no output as loop never gets executed.
let count = 10
while (count < 5) {
    console.log(count)
    count--;
}

//infinate loop as there is no increment or decrement.
let n = 1;
do {
    console.log(n);
    //n++ or n--(shd be added)
} while (n < 3);
