const age = 18;
let vote = (age >= 18) ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(vote);

//Nested Ternary Operator
let mmarks = 20;
let result = (mmarks >= 35) ? (mmarks >= 85 ? "Distinction" : "1st Class") : "Fail";
console.log(result);

//maxi,u, b/w 2 numbers
let a = 10;
let b = 20;
let c = 5;
let greatest = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(greatest);


let temp = 24;
let weather = (temp >= 45) ? "Very Hot" :
    (temp >= 35) ? "Hot" :
        (temp >= 25) ? "Moderate" :
            (temp <= 20) ? "Cold" : "Pleasant";

console.log("Temprature is " + weather + " with temp at " + temp + " degree celcius");

