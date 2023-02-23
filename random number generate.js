let x=Math.random()//0-1
console.log(x)

x*=10//0-9
console.log(x)

let y=Math.floor(Math.random()*20)+5
console.log(y)

//Math.floor removes the deciamal part
let z=Math.floor(Math.random() * (25-15))+15
console.log(z)
//this doesnot include 25 ,to include 25 add 1 to 15
//(x-y)+y
//x represents highest degree and y represents the lowest or minimum number

const prompt=require("prompt-sync")()
let min=prompt("Enter min number")
min=Number.parseInt(min)
let max=prompt("Enter max number")
max=Number.parseInt(max)
console.log(random_generator(max,min))

function random_generator(max,min){
    let x= Math.floor(Math.random() * (max-min+1  ))+min;
    return x
}