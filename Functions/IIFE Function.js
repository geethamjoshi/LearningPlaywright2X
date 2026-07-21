/*Immidiately Invoke Function Expression 
can be used when want function to be called by itself and not by other functions
1. The function is wrapped in parentheses (function(){...}) → this makes it an expression instead of a declaration.
2. The trailing () immediately invokes it.
3.Most of IIFE o not have name

Drawback : it gets difficult to debug*/

//there is no function name hence "()" and then arrouw "=>"
(() => {
    console.log("Arrow IIFE executed!");
})();

//OR

(function () {
    console.log("Virat");
})();

