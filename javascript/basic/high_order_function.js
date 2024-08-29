function add(a ,b,cd){
let r=a+b;
cd(r);
}
add(1,4, function(val){
    console.log(val);
});
 

function add1(a,b,cd){
    let r=a+b;
    cd(r);
}
function showresult(result){
     console.log(result);
}
add1(4,67,showresult);
add1(4,56,val=>console.log(val))