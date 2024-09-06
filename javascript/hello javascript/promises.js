// Promise are used to handel the asysncjavascript
//  there are two type of disadvantge call back hell and inversion of controll
// inversion of controll means we are giving tour function t other function which can be run or can give error
// pyramid of dome when we write the call back function inside the another api and if we pass the more function then it is call back hell
//  to come over this we can use promise chaning
// const cart =["shoes",'pants'];
// console.log(cart);

// createorder(cart,function () {
//     makepayment(orderid);
// });

// const promise=createorder(cart);
// // createorder will return the promise it can be empty object { data : undefine } 
// // after getting the data from createorder after that it have then () method which takes call back function 

// //  promise chaning
// promise.then(function () {
//      return makepayment(orderid);
// }).then(function () {
//    return showorder(orderid);
// });
// // fetch() is used to make the api call to extarnal server
// // it is present in the globle object as   window 
// fetch()
// //  there are two state in promise state pending state , fullfiled state, rejected  

// //  fetch returns promise  object
//  const github_api="";
//  const user=fetch(github_api);
//  console.log(user);
//   how we can create our own promise
const cart1 =["shoes",'pants'];
const promise1=createorder1(cart1);
promise1
   .then(function(orderid){
       console.log(orderid); 
       return orderid;
    })
    // here we are attaching the call back function not giveing our call back function to other  
    .then (function(orderid){
        return proceedtopayment(orderid);    
    })
    .then(function(paymentinfo){ 
         console.log(paymentinfo);
    })
//  if we get the  data we can use then()method what if we get the error for that also promise has methos called catch
    .catch((err)=>{
    console.log(err.message);
    })
    .then(function(paymentinfo){ 
        //  is the validcart return false also this will exeute 
        console.log("this will definietely called");
   }); 
function createorder1(cart1){
    const pr=new Promise(function(resolve,reject){
        //  here we are creating the promise 
        if(!validatcart(cart1)){
            const err=new Error("error while creating the crate object");
            reject(err);
        }
        const orderid="76127";
        if(orderid){
            setTimeout(function (){
                resolve(orderid);
            },1000);  
        }  
    });
    // we have to return the promise
    return pr;
}  
function validatcart(cart1){
    return false;
}
function proceedtopayment(orderid){
    const pr=new Promise(function(resolve,reject){
//   reject(new Error("error in payment"));
    resolve("Payment sucessful");
    });
    return pr;
}

//  1 promise.all( it will take array of promise)
// if all the promise get the values then it will return the array of result  it will wait for all of them to finish
//  what is any of this promise fail as soon as the promise fail immediately it will return error
//  2 if any of the promise call return error but other promise are returing the values then we cab use  promise .allSetteled(array of promise)
// 3 promise.race([a1,a2,a3]) as soon as first promise finish it will return the value of fastest runned promise
//  what if the fastest runned promise return error then also it will return thr error it self
// 4 promise.any([arrayof promisis]) it is similar to promise.race() it will wait for first succcess it will not consider if the first promise return error it will wait for other promise until it get value what if every thing fail the return result will we aggregate error [it will be the array of all error]
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p1 is success")},3000);
});
const p2=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject(new Error("p2 error"));
   },1000); 
    setTimeout(()=>{resolve("p2 is success")},1000);   
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p3 is success")},2000);
});
// it will wait until every promise success but if any one return error it will stop that the other promise  
 Promise.all([p1,p2,p3])
 .then(function(res){
    console.log(res);
    return res;
 })
 .catch((err)=>{
    console.log(err.message);
 });
// this will wait for all the promise success 
 Promise.allSettled([p1,p2,p3])
    .then(function(res){
        console.log(res); 
    })
    .catch((err)=>{
        console.log(err.message);
    });
// it will return the value of first successed value if it is error 
Promise.race([p1,p2,p3])
.then(function(res){
    console.log(res ,"kiran "); 
})
.catch((err)=>{
    console.log(err.message);
});
//  it will wait until the one get success
//  if all the promise re fail then it will return aggregate error
// 
 Promise.any([p1,p2,p3])
 .then(function(res){
    console.log(res ,"kiran "); 
})
.catch((err)=>{
    console.log(err.message);
    console.log(err.errors);
    //  this will return all the error if all promise reject
});
//  the reult of promise is settled 
// in that they are two type
// resolve   | reject
// success   | failure 
// fullfiles | reject
