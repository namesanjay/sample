// wap tp print the marks of a student in an object using for loop

var student={
    Arbin:89,
    Sanjay:100,
    Sanjeev:85,
    Aakash:70,
    Aayush:30,
    Prabin:25,
    Sushil:50,
    Sudip:84
};
for(let i=0;i<Object.keys(student).length;i++)
console.log(Object.keys(student)[i],"=",student[Object.keys(student)[i]])

for(let a in student)
console.log(student[a])

console.log(Object.keys(student)[5])
console.log(student[Object.keys(student)[5]])