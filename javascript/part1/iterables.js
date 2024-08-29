//  string iterable and
//  array is also iterable 
const name ="kiran ";
for(let char of name ){
    console.log(char);
}
 const arr=[1,2,3,4,5];
 for(let i of arr){
    console.log(i);
 }
//   objects are not iterable 
// this will give error
// const user={'key1':1,"key2":3};
// for(let u of user){
//     console.log(u);
// }

// array like object 
//  which data typr has length property
// and which can access by index
// string and array for example