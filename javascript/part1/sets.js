//  sets store only unique value
//  syntax

//  no index based access
// not stored in order
const number=new Set([1,2,3,3]);
console.log(number);
 const s=new Set("dmkdk");
  console.log(s);
  number.add(0);
  console.log(number);
  console.log(number.has(4));

//    it is iterable 
for(let i of number){
    console.log(i);
}
//  there is no length property
 const n=[1,2,3,4,5,6,4,3,2,1];
 const u=new Set(n);
 console.log(u);

