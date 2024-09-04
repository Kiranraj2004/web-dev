//  what is the call backfunction
// firt class function are also called call back function

// we can pass the function as variable in the same way we have to pass the function in settime out and we
// have to give the some time java script don't wait for any execution so that it is called as asynchronous 
// setTimeout(function(){
//     console.log("time")
// },1000);
// function x(y){
//     console.log("x");
//     y();
// }
// x( ()=>{
//     console.log("arrow function ");
// })
// x(function y(){console.log("function declaration ")});

console.log("kiran ");
// 
function m(){
    document.getElementById("k").innerHTML="raj";
}


//  this is going to increase the count value every time 
 
    let count=0;
    document.getElementById("c").addEventListener("click",()=> {
        console.log("button clicked",count++);
});
//  to hide the data we can use clourse
function y(){
    let count=0;
    document.getElementById("c").addEventListener("click",()=> {
        console.log("button clicked",count++);
});
}
y();

//  java scrpit is the single threaded because it has only one call stack 
//  so for that reason it can do one task at a time
    // call back queue event loop call stack 
    // web api micro tasking  queue






