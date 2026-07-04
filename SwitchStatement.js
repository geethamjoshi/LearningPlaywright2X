//Switch always uses ===
//use break else all switch statements will be executed until a break is found

let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let response = 400;
switch (response) {
    case 200:
        console.log("OK");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 500:
        console.log("Internal Server Error");
    default:
        console.log("Unknown Response");
}

//Switch without break statements - all casea are executed until a break is found or the switch statement ends
let colour = "Red";
switch (colour) {

    case "Red":
        console.log("Colour is Red");
    //break;
    case "Green":
        console.log("Virat likes Green");
    // break
    case "Pink":
        console.log("Sammu likes Pink");
    //   break;
    default:
        console.log("Colour is not Red, Green or Pink");
}

let score = 85;
switch (true) {
    case (score >= 90):
        console.log("A Grade");
        break;
    case (score >= 80):
        console.log("B Grade");
        break;
    case (score >= 60):
        console.log("C Grade");
        break;
    case (score >= 35):
        console.log("Just Passed, Needs Improvement!");
        break;
    default:
        console.log("Failed");
}
/*in the below program when x = 10 0r 20 or 30 the relavant switch statement is executed.
when x= 50 or anything apart from condition given in switch default case is executed. 
But since "d" variable is not defined we get reference error*/
let x = 20;
switch (x) {
    case 10:
        let a = 8;
        console.log(a);
        break;
    case 20:
        let b = 9;
        console.log(b);
        break;
    case 30:
        let c = 10;
        console.log(c);
        break;
    default:
        console.log(d);
}

/*Similarly in the below program when number = 10 the first case is executed and the second case is not executed because of break statement. 
THE first instance of the switch statement is executed
Switch will allow dduplicates with first one in the usage*/
let number = 10;
switch (number) {
    case 10:
        let a = 8;
        console.log(a);
        break;
    case 10:
        let b = 9;
        console.log(b);
        break;
    case 30:
        let c = 10;
        console.log(c);
        break;
    default:
        console.log("No match found");
}

//case with "10" is executed. if you have a doubt use console.log(typeof(num)). Always remember switch always uses "===" tripal equalto
let num = "10";
console.log(typeof (num));
switch (num) {
    case 10:
        console.log("Number is 10");
        break;
    case "10":
        console.log("Number is 5 inside String");
        break;
}


let data = 0;
console.log(typeof data);
switch (data) {
    case 0:
        console.log("0 matched");
        break;
    case false:
        console.log("false matched");
        break;

}