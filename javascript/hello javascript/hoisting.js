getname();
console.log(x)
// here we are calling the function before it initalizing 
//  even the x variable  this is based on execution
//  x is going to give the undefine value 
// 
var x=7;
console.log(getname ,"ajds")
function getname(){
    console.log("hello");
}
console.log(getname)

//  this will give the undefine because the arrow function is assign to variable 
//  now its not the function
console.log(getname1)
// var getname1=()=>{
//     console.log("hello")
// }
//  same for function declaration here also the getname1 is variable 
var getname1 =function () {
    // console.log(getname1)
    console.log("hello123")
}
getname1();
