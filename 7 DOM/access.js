console.log("Sanjay")
console.log(document.body.firstChild)
alert(document.body.lastChild)
document.body.lastElementChild
console.log(document.body.childNodes)
let arr=Array.from(document.body)
console.log(arr)
console.log(document.documentElement)

console.log(arr[1])
console.log(document.body.childNodes[2])
// document.documentElement  run this line inn console

let ch=confirm("Want to change the color of text")
if(ch)
document.body.style.color="red"

ch=null
ch=confirm("Click yes to change the background image")
if(ch)
document.body.style.backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/1017/141/112/amber-heard-women-brunette-face-wallpaper-preview.jpg')"