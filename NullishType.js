/* Suppose milk is null or do not have any data then Nandini is printed. Llse value of milk i.e. 
Amul is printed. Above o/p will be Nandini because milk is null. If milk is Amul then o/p will be Amul. 
So ?? is used as checking for null condition */

let milk = null;
let name = milk ?? "Nandini"; //if milk is null or undefined then name will be "Nandini" else name will be milk
console.log(name);

/*Now let's see the behavior when milk is not null
milkName is not null its "AkshayaKalpa" so milkReq will be "AkshayaKalpa" */
let milkName = "AkshayaKalpa";
let milkReq = milkName ?? "Nandini";
console.log(milkReq);

