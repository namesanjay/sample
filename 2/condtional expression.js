// constional expresion same as c such as if,else,switch
const prompt=require("prompt-sync")()
let a=prompt("Hey whats your age:")
a=Number.parseInt()//a=Number(a)
console.log(typeof a)
if(a>18){
    // alert("Can vote")
    console.log("can vote")
}
else{
    // alert("Cannot vote")
    console.log("Cannot vote")
}

//alert can only be used in browser or online compiler