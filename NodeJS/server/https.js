const http = require('http');
const fs = require('fs');
const url = require('url');
const { error } = require('console');
 const server=http.createServer((req, res) => {
    if(req.url!="/favicon.ico"){
    fs.appendFile("httpslog.txt",`${new Date()} - ${req.method} ${req.url}\n` , (error)=>{
        if(error) console.log(error);
        console.log("Log entry added");
    })
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);
    switch (parsedUrl.pathname) {
        case '/':
            res.end("Hello from server");
          break;
        case '/about':
            const name=parsedUrl.query.k;
            console.log(parsedUrl.query.k);
            res.end(`hello im ${name}`);
          break;
        default:
          res.end('Page not found');
          break;
    }
    }
});
server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });