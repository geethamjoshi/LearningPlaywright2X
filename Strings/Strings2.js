let str = "Hello World!";
console.log(str.length); // 12 >> string length starts with 1 and index starts from 0 always
console.log(str[0]); //H
console.log(str[1]);//e
console.log(str[7]);//o
console.log(str.at(-1));// ! >> to go reverse order always use ".at"
console.log(str.at(-6));//W

let str1 = " ";
console.log(str1.length); //1
console.log(str1[0]); // space will be printed

console.log(str.charAt(0)); //H
console.log(str.charCodeAt(0)); //75 ASCII value