//create an array of numbers and take input from the user to add number to array
//and keep adding until 0 is added
let arr=[]
const take=require("prompt-sync")()
let tmp=take("value:")
let i=0
while (tmp!=0){
    arr[i++]=Number.parseInt(tmp)
    tmp=take("value:")
}89
arr[i]=0
console.log(arr)

let given=[23,77,90,11,50,100,34]
let naya=given.filter((value)=>{
    if(value%10==0)
    return value
})
console.log(naya)