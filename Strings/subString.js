let str = "Login_test_pass_001";
console.log(str.slice(0, 4)); //Logi
console.log(str.slice(11)); //pass_001

let tcNo = str.slice(-3); //001
console.log(tcNo);

//substring do not accept -ve index.
console.log(str.substring(6, 10));//test
console.log(str.at(0)); //L