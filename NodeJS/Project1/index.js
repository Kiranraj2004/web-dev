
const express = require('express');
const users=require('./MOCK_DATA.json');
const app = express();
const PORT =8000;
const fs=require('fs');
// middleware plugin
app.use(express.urlencoded({ extended:false }));
//  **** GET METHOD rendering the html content


app.get('/',(req,res)=>{
    const html=`<ol>
    ${users.map(user=>`<li>${user.first_name}</li>`).join('')} 
    </ol>`;
    return res.send(html);
});
//  get data GET methods 
//  json content redendering 
app.get('/api/users',(req,res)=>{
    return res.json(users);
});

//  if we want to render for dynamic route then we have to use : example /api/users?:id id can be 1 ,2,3,4,5 so it is dynamic 
app.get('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(user=>user.id===id);
    if(user){
        return res.json(user);
    }else{
        return res.status(404).send('User not found');
    }
});


// *** POST /api/users -createnew users  
app.post('/api/users', (req,res)=>{
    // adding the new user 
    const body=req.body;
    console.log(body);
    users.push(...body,id=users.length+1);
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(user),(error, data)=>{
    return res.json("status pending ")
    });
});

// patch to upadte any thing
app.patch('/api/users/:id', (req,res)=>{
    return res.json("status pending ")
});

// delete to remove any thing
app.delete('/api/users/:id', (req,res)=>{
    return res.json("status pending for delete ")
});



//  if we have operation life post ,delete get patch on same route then we can write like this 
app.route('/api/users?:id').get( (req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(user=>user.id===id);
    if(user){
        return res.json(user);
    }else{
        return res.status(404).send('User not found');
    }
})
.patch((req,res)=>{ return res.json("status pending for patch")})
.delete( (req,res)=>{ return res.json("status pending for delete")});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});