let broser = ["chrome", "firefox", "safari", "opera", "3"];
console.log(broser.length);
console.log(broser);

broser.pop();//removes edge;

for (let i = 0; i < broser.length; i++) {
    console.log(broser[i]);
    if (broser[i] === "opera") {
        console.log("Opera is removed from selenium");
    }
}

let res = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(res.indexOf("firefox"));//1
console.log(res.indexOf("fail")); //-1 as this is not present

console.log(res.lastIndexOf("edge"));//4

console.log(res.includes("opera"))//true if present. true or false will be o/p

