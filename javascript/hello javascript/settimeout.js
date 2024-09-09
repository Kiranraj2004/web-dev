// function x(){
//     var i=1;
//     setTimeout(function (){
//         console.log(i);
//     },3000);
//     console.log("hello world ");
//     for(i=0;i<4;i++){
//         console.log(i);
//     }
// }
// x();
// first it will print hello world because js will not wait for any execution 
// function x(){
//     for(let i=0;i<4;i++){
//         setTimeout( function (){
//             console.log(i);
//         },i*1000);  
//     }
// }
// x();
// if we use the let variable then it will store the value of i 
//  if we use the var variable then it will store the reference 
function x(){
    for(let i=0;i<10;i++){
        function close(j){
            setTimeout( function (){
                console.log(j);
            },j*1000); 
        }  
        close(i);
    }
}
x();
// here we are using the var variable and then solving the problem 
// every time we are passing the value not a reference type 