// what is async ?
//  always aync return a promise 
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolve ");
    },1000);
   
 });
async function getdata(){
    // either you will return the promise or you rapup that value which you are returning into promise and then it will return
    // return "Kiran raj b";   returning the value but it will rapup into promise
    return p;
}
  
 const datapromise=getdata();
//  console.log(datapromise);
//   promise are handell
datapromise.then ((res)=>console.log(res));

//  how to we use async await
// this is used to handel the promises 
//  this is the general way to print 
function getdata1(){
    p.then((res)=>console.log(res));
    console.log("kiran raj b");
}
getdata1();
async function handelpromise(){ 
console.log("kiran raj b it will print imedieatly")
    const val=await p;
    //  await is the keyword it is only used in async  function and we write in front promise   
    //  we have to wriet the await behind the promise object if we store that we get the resoleved value of the pomise 
    console.log(val);
    //  the difference between normal function to handel the promise and async function is 
    // this will wait at the line 30 until it return the value 
    //  after that only iit is going to print the console .log() 
    console.log("kiran raj b");
    try{
        const val2=await p;
        console.log("this is going to call this promise parallaly");
        console.log(val2);
    }
    catch(err){
        console.log(err.message);
    }
    //  here we use try catch block   
}
handelpromise().catch(err=>console.log(err)); 
console.log("f");
// fetch return response and it is json object and convert the json object into using data variable .json() this will give you the result  
