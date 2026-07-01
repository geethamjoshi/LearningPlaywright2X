//pre increment - 1st increase the value of a by 1 and then assign the value to b. ++a will be 11 and then b will be assigned to 11
let a = 10;
let b = ++a;
console.log(a); //11
console.log(b); //11

//Post Increment - first assign the value and then increase the value 
let x = 20;
let y = x++;
console.log(x); //21
console.log(y); //20

let a1 = 34;
let res = a++;
console.log(res); //34
console.log(a1); //35

let num = 10;
console.log(++num + num); //pre increment so 10 will be 11 and assigned to num and then 11 + 11 = 22
console.log(num); //pre increment so 10 will be 11 and assigned to num i.e 11

let c = 10;
console.log(c++ + c); //post increment so 10 will be assigned to c and then c will be incremented to 11 and then 10 + 11 = 21
console.log(c); //post increment so 10 will be assigned to c and then c will be incremented to 11 i.e 11

let d = 10;
console.log(d++ + ++d); //d++ will be 10 and then ++ wil make it 11, now d is 11. Next ++d post incriment 11 will be incrimented to 12. 11+12   
//d++ + ++d = 10+12=22

let sam = 50;
console.log(++sam + ++sam + sam++);  //51+52+52
console.log(sam);

let t = 10;
console.log(t++ + ++t - --t + t-- + ++t); //10+12-11+11+11=33


