const prompt=require("prompt-sync")()
const arr=[1,2,"3",4]
console.log(arr)
arr[3]=976
console.log(arr[3])
console.log(arr[4])
console.log(arr.length)
arr[5]=8976
console.log(arr)
arr[9]=9878765
console.log(arr)

//Arrays are mutable(can be changed)

let arr1=[null]
for(let i=0;i<6;i++){
    arr1[i]=prompt("Enter value");
}
console.log(arr1)
console.log(typeof arr1)


let var1="Chrissy"
let var2="Amber"
let var3="Scarlett"
let arr3=[var1,var2,var3]

for(let i=0;i<arr3.length;i++)
console.log(arr3[i])