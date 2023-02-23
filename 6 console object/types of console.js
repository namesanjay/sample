console.log("k xa")
console.error("this is an error")

//console methods 
//run the program in console

console.assert(5>=8)
console.assert("sanjay"=="SANJAY")
console.assert(8==8)//if the condition is true is doesnot return
console.clear()//it clears the console


let obj={
    "Sanjay":100,
    "Arbin":90,
    "Sanjeev":80,
    "Sudeep":67
};
console.table(obj)//It shows key and value in tabular structure

console.warn("Please,Dont do thiss")

console.info("information block")
//console.info and console.log are somehow similar

console.time("A")
let v
for(let i=0;i<1000;i++){
    v=v+i
}
console.timeEnd("A")


for(let i=0;i<10;i++)
console.count(i)

console.group('simple');
  console.warn('warning!');
  console.error('error here');
  console.log('vivi vini vici');
  console.log("Sanjay Nepali")
console.groupEnd('simple');
console.log('new section');