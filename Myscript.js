//text1 btn1 , btn2-> files
let count = 0;
document.getElementById("btn1").onclick(()=>{
    count ++ 
    document.getElementById("text1").innerHTML = count
})


// ---- READING FILE
const fs = require("fs");

// Asynchronous read
// fs.readFile(, function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
// });
// Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());
// console.log("Program Ended");

// call to read file event-->
getFile()
{
   alert("clicked")
}


document.getElementById('file1').addEventListener('click', () => {
  getFile()
})