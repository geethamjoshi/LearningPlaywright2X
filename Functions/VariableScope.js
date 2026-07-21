/*Function Scope (var)
Variables declared with var are scoped to the entire function, not just the block they’re in.
 Even though x was declared inside the if block, it’s still accessible outside because var ignores block boundaries.*/

function demoVar() {
    if (true) {
        var x = 10; // function-scoped
        console.log("Inside block:", x); // ✅ 10
    }
    console.log("Outside block:", x); // ✅ 10 (still accessible)
}

demoVar();
