function add (a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}

// module.exports=(add);
//  this is for single method export 
//  if we have to export the multiple methods use object in js
module.exports={add,subtract};



//  there is another methos to do this 

exports.add1=(a,b)=> a + b;
//  this is ananymous function because it has no name 