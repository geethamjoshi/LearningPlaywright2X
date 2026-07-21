(200).toString();// converts to string
true.toString();

Number("42"); //converts String "42" to number

console.log(typeof (parseInt("42px"))); //42 >> Converts a string to an integer.
/**parseInt("42px") → This tries to convert the string "42px" into an integer.

It starts reading from the left: "42" is valid as a number.

When it reaches "p", parsing stops.

So the result is the number 42.

typeof (42) → In JavaScript, all numeric values (integers, floats, NaN, Infinity) have the type "number". */

console.log(typeof (parseFloat("32.568rem")));


