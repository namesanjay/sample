//create an array of square of given number
const prompt=require("prompt-sync")()

// let arr1=[]
// let n=prompt("Enter no of element:")
// for(let i=0;i<n;i++){
//     let tmp=prompt("value:")
//     arr1.push(tmp**2)
// }
// console.log(arr1)

const arr=[2,5,7,5,7]
let arr1=arr.map((value)=>{
    return value**2
})
console.log(arr1)

// use reduce method to calculate factorial of a given number from an array of first n natural

let n=prompt("Enter number:")
let ar=[]
for(let i=1;i<=n;i++)
ar.push(i)

n=ar.reduce((v1,v2)=>{
    return v1*v2
})
console.log(n)