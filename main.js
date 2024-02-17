console.log("Hello Node.js");




// write a function that takes username and greet the user
// e.g welcome back, <username>
const greetUser = (username) => {
  console.log(greetUser);
}

import http frm http

const http = require("http");

// create  a  basic server
http.createServer(
  (req, res) => {
    res.end('hello World from NodeJS server! ')

  }).listen(3000);


  // Example 2
  http.createServer(
    (req, res) => {
      const username = "Peter";
      const printName = () => `Welcome ${username}`;
      const result = printName();
      res.end(result);
    }).listen(3000);
  
  
console.log('server running on port 3000');

