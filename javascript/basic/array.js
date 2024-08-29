const s=["p","jhon","jane"];
console.log(s[0]);
s[0]="macbook pro";
s.push("kiran");
console.log(s);
const arr=[1,2,"2",'r'];
console.log(arr)
arr.reverse();



//  higher order methos in array

const str=["piyuash","john","fame"];
print(str);

function print(n){
     console.log(n);
}

const number=[1,2,3,4,5];
function double(n){
    return n*2;
}

let newarr=number.map(double);
console.log(newarr)
