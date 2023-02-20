let name="Harry"
console.log(name.length)
console.log(name.toUpperCase())

let tmp="HARRY"
console.log(tmp.toLowerCase())

//slice
console.log(name.slice(2,4))
console.log(name.slice(2))

name="Ram Babu"
name=name.replace("Ram","Sanjay")
console.log(name)

name=" Sanjay "
let newname=name.trim()//trim() removes whitespaces
console.log(newname)

//concatination

name="linkin"
newname="Park"
console.log(name.concat(newname))
console.log(name)
name="Chester Bennington"
for(let i=0;i<name.length;i++)
console.log(name[i])