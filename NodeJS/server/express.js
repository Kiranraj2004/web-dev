const express=require('express')

const port=3000 ;

const app=express();

app.get('/',(req,res)=>{
    //  if you want to work with the query parameters we can use directly req parameter
    console.log(req.query);
    const name=req.query.k||'guest';
    res.send(`Hello World! ${name}`);
});
app.get('/about',(req,res)=>{
    res.send('Hello this is about page!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
