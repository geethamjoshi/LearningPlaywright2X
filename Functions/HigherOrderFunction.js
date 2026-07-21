//function that takes function as arguments ar returns a function
//this is nothing but funvtion as argument

function runwithLogin(testfn, testName) {
    console.log(`Starting test ${testName}`)
    let result = testfn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}

runwithLogin(loginTest, "Login Test");
runwithLogin(loginTestFailed, "Dashboard Login Test Failed");
