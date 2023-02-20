const prompt=require("prompt-sync")()
// function check(){
//     let n=prompt();
//     if(n==78)
//     return true
//     return false
// }
// console.log("Enter number:");
// while(1){
//     if(check()==true){
//         console.log("Correct number")
//         break
//     }
//     else
//     console.log("Enter again")
// }
const mean=()=>{
    let sum=0,tmp;
    for(let i=0;i<5;i++){
        tmp=prompt("enter number");
        tmp=Number.parseInt(tmp)
        sum+=tmp;
    }
    return sum/5;
}
const value=78
let i
while(i!=value){
    i=prompt("enter again");
}
console.log("Correct number")
// Wap to find mean of 5 number
// let sum=0
// for(let i=0;i<5;i++){
//     let tmp=prompt("Enter number:")
//     tmp=Number.parseInt(tmp);
//     sum+=tmp
// }
//console.log(sum/5)
//wap to find the mean using function
console.log("Mean=",mean())