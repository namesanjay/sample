let compare=(a,b)=>{
    return a-b
}
let num=[34,22,98,11,78,33,87,124,6]
num.sort(compare)
// num.sort()
console.log(num)
// function compare(a,b){
//     return a-b
// }
num.reverse()
console.log(num)

const number=[1,2,3,4,5]
// number.splice(23,5,1,2)
number.splice(2,1,23,24)
console.log(number)


//slice
console.log(number.slice(2))