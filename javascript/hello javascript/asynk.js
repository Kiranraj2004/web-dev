var a=11;
let x;
console.log(a);
// {
//     let s=0;
//     console.log(s);
// }
function x1(){
    var a1=0,z;
    return function a(){
        console.log(a1,z);
    }
}
var s=x1();
console.log(s().a1);
console.log(9);
// console.log(9);