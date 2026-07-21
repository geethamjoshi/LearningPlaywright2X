/*Java Script allows function within function or nested functions
veriables declared inside outer function is accessiable by inner function. where as var declated inside inner functio
are not accessable by outer function*/
function outer() {
    let x = 10; //its like global var

    function inner() {
        let y = 20;
        console.log(x);

        inner();
        console.log(y);
    }
    //console.log(y); - not possible throws error
} 