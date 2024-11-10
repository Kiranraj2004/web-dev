console.log("hello world!");

// modules code 
//  to import the file in javascript you require method (require method)

// witout destructing 
const math=require('./math.js');
console.log(math.add(2,3));

//  destructing 
const {add,subtract}=require('./math.js');
console.log(add(2,3));
console.log(subtract(2,3));
