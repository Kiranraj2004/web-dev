// Use Node.js built-in http module to create a web server.
const http = require('http');
const fs= require('fs');
/* normal creating server 
// Create the server using http.createServer() with a request listener function
const server = http.createServer((req, res) => {
    // console.log("New request received");
    console.log(req);
    //  req is object used to store the request information
    res.end("Hello from server");
  });
  */

//    creating the server  which append the log in the file 
  const server = http.createServer((req, res) => {
    fs.appendFile('server.log', `${new Date()} - ${req.method} ${req.url}\n`, (err) => {
      if (err) {
        console.error('Error appending to log file:', err);
      } else {
        console.log('Log entry added successfully');
      }
    });
   res.end("hello world!");
  });
//   Assign a port number (e.g., 8000) to listen for incoming requests
  server.listen(8000, () => {
    console.log("Server started on port 8000");
  });
  

