let age = 30
if (age>18)
{
    console.log("Eligible to vote");
}
else
{
    console.log("Not Eligible to vote");
}

let mscore = 78;
if (mscore >= 90) {
    console.log("Grade A+");
} else if (mscore >= 80) {
    console.log("Grade A");
} else if (mscore >= 70) {
    console.log("Grade B");
} else {
    console.log("FAIL");
}

let isloggedin = true;
let role = "admin";
if(isloggedin) 
    if(role === "admin"){
        console.log("Admin logged in");
    }
    else if(role = "User"){
        console.log("User logged in");
    }
    else if(role = "Guest"){
        console.log("Guest logged in");
    }
    else
    {
        console.log("Invalid role");
    }
else
{
    console.log("User not logged in");
}

let statusCode = 200;
if(statusCode === 200) {
    console.log("Request successful");
} else if (statusCode === 404) {
    console.log("Request failed");
} else if (statusCode === 500)  {
    console.log("Unknown status code");
} else 
{
    console.log("Invalid status code");
}

//Interview Questions   
if("hello")console.log("Hello is truthy"); //Hello is truthy
if(10)console.log("10 is truthy"); //10 is truthy
if([])console.log("Empty array is truthy"); //Empty array is truthy
if({})console.log("Empty object is truthy"); //Empty object is truthy

if("")console.log("Empty string is truthy"); //Empty string is falsy so nothing will be printed 
if(null)console.log("Null is truthy"); //Null is falsy so nothing will be printed
if(undefined)console.log("Undefined is truthy"); //Undefined is falsy so nothing will be printed
if(NaN)console.log("NaN is truthy"); //NaN is falsy so nothing will be printed
if(0)console.log("0 is truthy"); //0 is falsy so nothing will be printed


//Rule : any number except 0 is true. 0 will always be false. Empty string, null, undefined, NaN are all false. All other values are true.  
let abc = "";
if (abc){
    console.log("abc is truthy");
} else {
    console.log("abc is falsy"); //abc is falsy
}

let abcD = null;
if (abcD){
    console.log("abcD is truthy");
} else {
    console.log("abcD is falsy"); //abcD is falsy
}

let abcE = undefined;
if (abcE){
    console.log("abcE is truthy");
} else {
    console.log("abcE is falsy"); //abcE is falsy
}

let abcF = NaN; 
if (abcF){
    console.log("abcF is truthy");
} else {
    console.log("abcF is falsy"); //abcF is falsy
}

let abcG = 0;
if (abcG){
    console.log("abcG is truthy");      
} else {
    console.log("abcG is falsy"); //abcG is falsy
}   


//Logical operator with if else
let uname ="geetha";
let pwd = "1234";
let accountlocked  = true;
if((uname ==="geetha" && pwd ==="1234") && !accountlocked){
    console.log("Login successful");
}else if((uname ==="geetha" && pwd ==="1234") && accountlocked){
    console.log("Account is locked");
} else if((uname ==="geetha" && pwd !=="1234") && !accountlocked){  
    console.log("Invalid password");
} else {
    console.log("Invalid username or password");
}

let x1 = 15;
if(x1>10)
console.log("x is greater than 10"); //

let eve = 26;
if(eve % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

let stdgrade = 90;
if (stdgrade >= 90) {
    console.log("Grade A");
} else if (stdgrade >= 80 && stdgrade <= 89) {
    console.log("Grade B");
} else if (stdgrade >= 70 && stdgrade <= 79) {
    console.log("Grade C");
} else if (stdgrade >= 60 && stdgrade <= 69) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

let leapyear = 2019;
 if ((leapyear % 4 === 0 && leapyear % 100 !== 0) || leapyear % 400 === 0) {
    console.log("✅ Leap year");
} else {
    console.log("❌ Not a leap year");
}


let expectedstatus = "Login successful";
let actualstatus = "Login successful";
if(expectedstatus === actualstatus){
    console.log(" ✅ Test passed");
} else if (actualstatus === "Invalid Credentials"){
    console.log("Test failed");
}

let bugImpactScore = 9;
if(bugImpactScore >= 9 && bugImpactScore <= 10) {
    console.log("Critical bug");
}else if (bugImpactScore >= 7 && bugImpactScore <= 8){
    console.log("Major bug");
}else if (bugImpactScore >= 4 && bugImpactScore <= 6){
    console.log("Minor bug");
}else if (bugImpactScore >= 1 && bugImpactScore <= 3) {
    console.log("Low bug");
}else {
    console.log("Invalid bug score");
}

let buildStatus = "36%";
if (buildStatus === "100%") {
    console.log("🟢 Build successful : Green Build");
} else if (buildStatus >= "90%" && buildStatus <= "99%") {
    console.log("🟡 Stable Build : Investigate Failures");
} else if (buildStatus >= "70%" && buildStatus <= "89%") {
    console.log("🟠 Unstable Build : Fix Critical Issues");
} else {
    console.log("🔴 Build failed : Fix all issues");
}

let loginAttempt = 1;
if(loginAttempt === 2){
    console.log("1 attempt left to login");
}else if(loginAttempt === 3) {
    console.log("No attempts left to login");
}else if(loginAttempt === 0) {  
    console.log("Login successful");
}else {
    console.log("Invalid login attempt");
}