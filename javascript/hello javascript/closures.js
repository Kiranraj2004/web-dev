// function x(){
//     var  a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// function x(){
//     var  a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// clousure will form the lexical form boundel while returning the y 

function x(){
        var  a=7;
        a=200;
       return function y(){
            console.log(a);
        }
       
    //    this is also same 
    }

let z=x();
z();

//   intersting part of closure 

// 
function outest(){
    // var c=10;
    function outer(b){
        function inner(){
            console.log(b,c,"adsdkd");
        }
        return inner;
    }
    return outer;
}
let c=2;
var close=outest()("kiran ");
close();


//  advantage 
// data hiding , 
// example
function counter(){
    var count=0;
    return function increment(){
        count++;
        console.log(count);
    }
}
var m=counter();
m();

// if we want the dicrement fuction as closure
function v(){
    this.increment= function (){
        count++;
        console.log(count);
    }
    this.decriment= function (){
        count--;
        console.log(count);
    }
}
var count=0;
var m= new v();
m.increment();
m.increment();
m.decriment();

// disatvantage 
// it will take the lot of memory

