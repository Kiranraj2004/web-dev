// console.log(b);
// console.log(a);
// var b=10;
// let a=100;
// for a it will alocate the memory in script    here if we access the let or const variable before initazlieing the value it gives error 
//  for var variable it will alocate the memory in goble execution so the we var variable is hoisted 
// the time bt undefine and initalizeing the value to variable is temporal dead zone

// window object is globle variable 

//  let and const or hoisting object and it has teporal dead zone 
// let and const are block scope 

// {  this is block } block is used to group the statment
// block scope the variavle which are access only in that block

// shadowing 
// ex
var a1=10;
let a=23;
{
    var a1=100
    console.log(a1);
    // here  in this bli=ock a1 will gives 100 beacuase it will shadow the outside declared variable 
    // but once we come out of the block  again we get a1 as 100

    let a=98;
    //  but in case of const and let will is only aplicable for only this block if we declare in block 
    console.log(a);
}
console.log(a);

//  it gives the 100 only beacuse a1 is same in the globle execution

//  we have 3 scope block, script , globle 
console.log(a1);

// ilegal shadowing 
let w=0;
{
// we can use var like this gives error 
    // var w=9;
    const w=10;
    // but we can do with const and let 
    console.log(w);
}
console.log(w);
 var s=10;
 {
    let s=78;
    console.log(s);
 }
    //   this is valid because the variable should nit cross the boundry os scope