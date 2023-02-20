//to string
let arr=[1,2,3,4,5]
console.log(arr)
// arr=arr.toString()
console.log(arr.toString())

//join function joins all element using a separator
//arr.join("symbol")
console.log(arr.join("="))

arr.pop()
console.log(arr)

arr.push(76)
console.log(arr)


//shift removes element from the start and returns the value
let r=arr.shift()
console.log(r,arr)

// unshift 
r=arr.unshift(78)//it adds the element in the first index and returns the length
console.log(r,arr)

