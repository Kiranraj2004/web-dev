function a(){
    var b=10;
    console.log(b);
    console.log(a2);
    c();
    function c(){
        console.log(b,a2);
    }

}
// we cant access the value of a  
// console.log(b);
var a2=20;
a();
// lexical environment
//  chech the variable is present in same envinornament or in parent envinornment
//  scope chain