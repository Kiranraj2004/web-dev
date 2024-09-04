//     a function which takes function as the argument or a function return another function so that is higher order function 
function x(){
    console.log("x is call");
}
function y(x){
    x();
}
y(x);
//  y is higher order functin x is call back function 

const radius=[1,2,3,4];
function area(radius){
    const ans=[];
    for(let i of radius){
        ans.push(Math.PI*i*i);
    }
    console.log(ans);
    //  this is used to print in same line 
    console.log(...ans);
}
area(radius);
const circumfarence = function (radius){
    const ans=[];
    for(let i of radius){
        ans.push(2*Math.PI*i);
    }
    console.log(...ans);
}
circumfarence(radius);

const diameter=(raidus)=>{
    const ans=[];
    for(let i of radius){
        ans.push(2*i);
    }
    console.log(...ans);
}
diameter(radius);
// here we can see every time we are using the values only difference is we write different logic in different function 
//  this is using the higher order function which takes the lofic function 
const area1=function (i) {
 return Math.PI*i*i;
}
const diameter1=function (i) {
    return 2*i;
   }
const calculate=function (radius,logic){
    const ans=[];
    for(let i of radius){
        ans.push(logic(i));
    }
    console.log(...ans);
}
calculate(radius,area1);
calculate(radius,diameter1);
//  this is using the map function which takes the logical as function 

const a=radius.map(diameter1);
console.log(a);
const b=radius.filter((n)=>{
    return n%2===0;
})
console.log(b);
//  if we want to create the function logic same as map then we have to use array.prototype
Array.prototype.cal=function (logic){
    const ans=[];
    for(let i of this){
        ans.push(logic(i));
    }
    console.log(...ans);
}
radius.cal(diameter1);
