function sayhello(){
    console.log("hello");
}
sayhello();
sayhello();
//               argument
function sumofnumber(a,b){
console.log(a+b);
}
//         parameters
sumofnumber(2,4);
function multipy(a,b){
    return a*b;
    }
    let r=multipy(10,3);
    console.log(r);


    // unlimited argument
    function addunlimited(){
        // console.log(arguments);
        let ans=0;
        for(let i=0;i<arguments.length;i=i+1){
            ans+=arguments[i];
        }
        return ans;
    }
    let f=addunlimited(10,19,12,14,15,16);
    console.log(f);


    // spread operator
    function addunlimited1(...n){ 
        // console.log(arguments);
        let ans=0;
        for(let i=0;i<n.length;i=i+1){
            ans+=n[i];
        }
        return ans;
    }

