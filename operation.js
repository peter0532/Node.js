// // synchronous operation
// const fs = require('fs')
// const data = fs.readFileSync('mytext.text ');

// console.log(data.toString());

// console.log('program Ended');


// aysnchronous  operation
const fs = require("fs");

fs.readFile('myText.txt', function (err, data){
  // this is the callBack function

  if (err) return console.error(err);
  console.log(data.toString())
});


console.log("Program Ended successful");