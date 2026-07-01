let i = 10;

console.log(i == "10"); // true, because loose equality allows type coercion. 
console.log(0 == ""); //true, because loose equality allows type coercion."" converted to 0 and then compared with 0 
console.log(0 == false); //true, because loose equality allows type coercion. false converted to 0 and then compared with 0 
console.log(null == undefined); //true, because loose equality allows type coercion. null and undefined are considered equal in loose equality  
console.log(true == "1"); //true, because loose equality allows type coercion. true converted to 1 and then compared with 1   
console.log(true == 2); //false, because loose equality allows type coercion. true converted to 1 and then compared with 2

console.log(0 == "0"); //true, because loose equality allows type coercion. 0 converted to "0" and then compared with "0"
console.log("0" == 0); //true, because loose equality allows type coercion. "0" converted to 0 and then compared with 0
//above example on right side of equation is "0" or "" then its converted to 0 


//transitive property of equality
console.log("" == "0"); //false, because loose equality allows type coercion. "" is an empty string and "0" is a non-empty string, so they are not equal
//"" converted to 0 and "0" converted to 0 then compared with 0. but "" is not equal to "0" so false

console.log(5 != "5"); //false, because loose equality allows type coercion. 5 converted to "5" and then compared with "5"