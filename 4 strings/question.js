console.log(" har\"")
console.log(" har\"".length)

//includes() function
let str="In this heaven an earth I am the honoured one"
console.log(str.includes("heaven",8))
console.log(str.includes("Earth",18))
//includes function is case senstitive

console.log(str.startsWith("in"))
console.log(str.endsWith("one"))

str="LINKIN PARK"
str=str.toLowerCase()
console.log(str)

str=" Please give Rs 1000"
let newstr=str.slice(16)
console.log(newstr)
//try to change the 4th character of string
str=str.replace("a","s")
console.log(str)

// str[3]="Z"
// console.log(str)
//This method will not work because string is immutable(not changeable)