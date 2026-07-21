//String Reverse- no in built function
let str = "Geetha";
let a = ""
for (let i = str.length - 1; i >= 0; i--) {
    a = a + str[i];
}
console.log(a);