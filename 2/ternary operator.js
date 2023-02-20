const set = require("prompt-sync")();
let n=set("Enter value:");
n=Number.parseInt(n);
console.log(typeof n)
// let v=n%10
// console.log(v)
console.log((n%2==0)?"Even":"Odd");