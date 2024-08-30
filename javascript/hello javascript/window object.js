console.log(typeof(this.b))
// console.log(window.b)
var a=10;
console.log(a)
function b(){
    var x=10
    console.log(x)
}
//  console.log(window.a)
 console.log(b())
//  console.log(window.a)
 console.log(this)

// undefine and not define if different 
// undefine when ever the memory execution happen that time it will only alocate the memory to variable it doesnt assign the value to that once 
// it start line by line ececutiion then it will assign the value 
//  not define means varoable is not define in code only