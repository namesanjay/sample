/* for loop type
1.for 
2.for in
3.for of
*/
for(let i=0;i<10;i++)
console.log("Hello world")

// for in
let obj={
    sanjay:99,
    suman:45,
    suraj:44,
    nishan:87
};
for(let a in obj){
    console.log(a,"=",obj[a])
}
let st="Sanjay"
for(let a of st){
    console.log(a)
}