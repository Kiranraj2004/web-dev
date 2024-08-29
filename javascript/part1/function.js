//  basic syntax
//  dunction declaration
function print(){
    console.log("hello world");
}
print();
// sum of two number
function sumofnumber(a,b){
    let sum=a+b;
    console.log(sum);
    return sum;
}
 console.log(sumofnumber(6,7));

//   odd or even
 function evenorodd(a){
    return a%2==0;
 }
 console.log(evenorodd(8));

  function findtarget(arr,target){
     for(let i of arr){
        if(i==target){
           
            return true;
        }
     }
     return false;
  }
  
   const arr=[1,2,3,4,3,2,0];
  console.log(findtarget(arr,0));

//   function expression;
//  variable name is function name
const a=function(){
    console.log("hello");
}
a();
console.log(a);
// const b=function (a){
//     return a%2==0;
//  }


//  arrow function
const b= (a)=>{
    return a%2==0;
 }
 console.log(b(1));
//   if functon having only one line 
// example
const n=(number)=>number%2===0;
console.log(n(19));


//  function inside function
const app=()=>{
    const myfinc=()=>{
        console.log("hello world ");
    }
    console.log("hello");
    myfinc();
}
app();


//  defualt parameter
//  is user does not pass the value then it will take default parameter

 function add(a,b=3){
    console.log(a+b);
 }
// add(1 ) =4
// add(1,3)=4

// rest parameter 
//  c will become array
function print(a,b,...c){
     console.log(a,b,c);
}
print(1,2,3,4,5,67)
function addall(...n){
    for(const i of n){
        console.log(i);
    }
}
 addall1(7,6,5,4,3,108678);
//   we can pass any values
  function addall1(){
    for(const i of arguments){
        console.log(i);
    }
  }

//   call back function 
function myfun2(){
    console.log("hello indside fun2");
}
function myfun(a){
    // a is the  function name 
    console.log(`function name ${a}`);
   a();
}
myfun(myfun2);

// function returning function 
function m(){
    function hello(){
        return "l";
    }
    return hello;
}
const v=m();
console.log(v);
console.log(v());









