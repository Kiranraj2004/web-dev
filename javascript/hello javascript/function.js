// this is the concept of scoping

var x=1;
a();
b();
console.log(x);
function a(){
    var x=12;
    console.log(x);
}
function b(){
    var x=13;
    console.log(x);
}

// this empty file has this give the    it will create widnow  

console.log(a)

a();

//  we can use the a variable before function declaration 
// function statment 
function a(){
    console.log("hello world a ");
}
// the declaration of the function is called function statment 

//  the difference bt the function statment  and function expression is hoisting 
//  now the  b is undefine 
// b1();
console.log(b1);
// function expression 
var b1 = function(){
    console.log("b called ");
}
// now  b1 is function variable 
// b();
// here we have assign the function of  variable 

//  anonymous function
// a function which has no name 
// function (){

// } this is  not the valid creation of function 
var b1 = function(){
    console.log("b called ");
}
// the function declaration like this is anonymous function 

// name function expression 

var b1 = function xyz(parameter ){
    console.log("b called ");
}
// xyz(values which we pass is called argument)
//  xyz is the local vaiable you can access the variable inside the block but you can't acceess the xyz outside 

// first class function  same  function class citizen
// we can pass the another function as argument 
// ability to use the function as variable  value 
// xyz(function(){

// })





