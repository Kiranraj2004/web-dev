 const arr=[5,4,3,110];
//   map is udes to tranform the array 
function double (x){
    return x*2;
}
function binary (x){
    return x.toString(2);
}
const d=arr.map(double);
const b=arr.map(binary);
console.log(b); 
const t=arr.map((x)=>{
    return x*3;
})
console.log(t);
console.log(d);
//  filter function is used to fillter the values
// if we need the only odd values 
//  if it has one line then no need to write the return 
const odd=arr.filter(x=>x%2==1)
console.log(odd);
//  reduce will give the single value from the array example sum  of the array  or the min or max
function sumofthearray(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum);
}
sumofthearray(arr);
//  reduce takes two arrgument one is accumulator and current values
// CURRENT IS used to iterate 
const output=arr.reduce((acc,curr)=>{
  acc+=curr;
  return acc
},0);
//  inital value we can intilaze 
console.log(output);
const a=[0,-2,-3];
//  by default the value is first value
const max=a.reduce((acc,curr)=>{
    console.log(acc);
if(acc<curr)acc=curr;
return acc;
},-1e8);
console.log(max);
//  real world example the data that we get from the api
const users=[
    {firstname:"kiran",lastname:"raj",age :21},
    {firstname:"rajath",lastname:"shetty",age :21},
];
//  we need out put in such way that list of full name 
// ["kiran raj","rajath shetty",..and so on];
console.log(arr.length)
console.log(users[0].firstname);
function result(users){
    const list=[];
    for(let i=0;i<users.length;i++){
        let a="";
       a+=(users[i].firstname+" "+users[i].lastname);
       list.push(a);
    }
    console.log(list);
}
result(users);
// we can do with the map function because we are going to each value in the users
const fullname=users.map((x)=>{
    let a="";
    a+=(x.firstname+" "+x.lastname);
    return a; 
})
console.log(fullname);

const filtertheusers=users.reduce((acc,x)=>{
    if(acc[x.age]){
        console.log(acc[x.age]);
        acc[x.age]++;
    }
    else{
        acc[x.age]=1;
    }
    return acc;

},{});
console.log(filtertheusers);
// {'21':2}
//  we need the name whoes age is >30
// filter will return only the object after that we map the values
const agelessthen30=users.filter((x)=>x.age<30).map((x)=>x.firstname);
console.log(agelessthen30);
const ageless=users.reduce((acc,current)=>{
    if(current.age<30)acc.push(current.firstname);
    return acc;
},[]);
console.log(ageless);








  

