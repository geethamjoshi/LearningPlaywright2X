/* ... is a spread - which means any number of elements
its an array of objects or elements we can pass 1 2 3 or many arguments
it shd be mentioned always at the last
we should always make last one as spread
 */
function loginres(suitName, ...result) {
    console.log(suitName);
    console.log(result);
}

loginres("Login", 1, 2, 3);
loginres("SearchScreen", "Geetha", "Virat");


console.log("**********************************************************************");

/* below example takes spread as arguments hence while calling we shd pass spread)
some -  function returns true if any value meets the condition even if 1 value pass the condition returns true  */
let rescode = [202, 201, 205];

function statusCode(...codes) {
    return codes.some(c => c > 200);
}

statusCode(...rescode);