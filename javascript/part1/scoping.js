// lexical scope
const b1=10;
function a1(){
    const b=1;
    function c(){
        const b=9;
        console.log(b);
        //  it will print b=9
    }

    c();
     console.log(b);
}
a1();

// let const are blck  scope
//  var is function scope;

{
    var q=0;
}
 console.log(q)
