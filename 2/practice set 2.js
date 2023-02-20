const take=require("prompt-sync")()
let n=take("Enter number:")
if(n%2==0 || n%3==0)
console.log("Divisible")
else
console.log("Not divisible")


let age=take("Enter age:")
console.log((age>18)?"You can drive":"You cannot drive")