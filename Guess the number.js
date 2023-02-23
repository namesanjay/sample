// const input=require("prompt-sync")()
const value=Math.floor(Math.random() * (101-1))+1
console.log(value)
let chance=0
let tmp=prompt("value:")
while(tmp!=value){
    chance++;
    tmp=prompt("Enter again:")
}
console.log("\n\nScore=",100-chance)