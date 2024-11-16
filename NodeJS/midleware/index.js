const express=require('express');
const app = express();
 const port=3000;

 app.use((req, res, next) => {
    console.log("Middleware 1");
    // making the middleware validate before sending it to the server
    next();
    //  we can return the middleware from here itself or we can call next() methos to move down

  });
  
  app.use((req, res, next) => {
    console.log("Middleware 2");
    // res.json({ message: "Hello from Middleware 2" });
    next();
  });


app.get('/',(req,res)=>{
    //  this is the request  header from webbrowser
    console.log(req.headers)

    //  custom header   and this is the response header  .. if we want to send custom headers then use X 
    res.setHeader('X-Custom-Header','Hello from server');
    res.statusCode=200;
    res.send('Hello from root route ia!');
});


  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
