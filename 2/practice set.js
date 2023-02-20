const input = require("prompt-sync")()
let age=input("Enter age:")
if(age<10 || age>20)
console.log("Exceeds the limit")
else
console.log("Age is between 10 & 20")


// to check whether a number is divisible by 2 * 3
let num=input("Enter number:")
if(num%2==0 && num%3==0)
console.log("Number is divisible")
else
console.log("not divisible")
