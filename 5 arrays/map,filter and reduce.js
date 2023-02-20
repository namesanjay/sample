let a=[12,45,67];
let naya=a.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(naya)
console.log("\n\n")

// filter
const arr=[45,23,21,10,11,3,5]
console.log(arr)
let na=arr.filter((value)=>{
    return value>15
})
console.log(arr)
console.log(na)

// reduce method in array

 let arr1=[1,2,3,5,2,1]

 let arr2=arr1.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr2)



 const add=(h1,h2)=>{
    return h1+h2+1
 }

 let newarr=arr1.reduce(add)

console.log(newarr)