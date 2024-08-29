// order collection of items
let frit="apple";
let f1=["apple","mango","banana"];
console.log(f1);
//  arrays are mutable 
// indinxing
// arrays are objects in js
console.log(f1[2]);
let mic=[1,20.2,"kiran","male"];
mic[0]="aryan";
console.log("kiran ");
 console.log(mic);
 console.log(Array.isArray(mic));

//  push
// insertion at last
mic.push(10);
console.log(mic);

// pop
// removing the last element
mic.pop();
console.log(mic);
let temp=0;
console.log("hello ", mic[0]);


// unshift
// inserting at first
mic.unshift(45678);
console.log(mic)


// shift
// remove the first element
mic.shift();
console.log(mic);
f1.shift();
f1.shift();
f1.shift();
f1.shift();
console.log(f1);

// push and pop are very fast


// clone of array
// let arr=[1,2,3,4];
// let arr1=arr;
// arr1.push(19);
// console.log(arr1===arr);
// console.log(arr);

// console.log(arr1);
// let arr=[1,2,3,4];
// let arr1=[1,2,3,4];
// arr1.push(19);
// console.log(arr1===arr);
// console.log(arr);
// console.log(arr1);
let arr=[1,2,3,4];
// slice method
//let arr1=arr.slice(0);
//let arr1=[].concat(arr);

// spread operator
let arr1=[...arr];
arr1.push(19);

// if we want to add extra elements to that arr1 we can use 
// arr1=arr.slice(0).concat(['a','d','f'])
arr1=[].concat(arr,['d','g','k']);

console.log(arr1===arr);
console.log(arr);
console.log(arr1);

// for loop for array
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

// we are not changing the fruit addres 
// fruit =[] ,if we do like this then we are changing the aaddress

const fruit=['q','r','o'];
fruit.push(1);
console.log(fruit);

//  for of loop in array
for(let f of fruit){
    console.log(f);
}

//  for in loop in array
// it will give index 
for(let index in fruit){
    console.log(index);
    console.log(fruit[index]);
}


// array distructing
const a=[1,2,3,4,5,6,7];
// let m1=a[0];
// let m2=a[1];
let [m1,m2]=a;
// if we want to skip the values
let [m0,,m3,...k]=a;
// k means all the letout elements in array
console.log(m2);
const nuumber=[4,3,8,7];
function mulyiply(number, i ){
    console.log("index is  ",i);
    console.log("number",index,number +" ");

}

// important array methods
const number=[4,2,1,5];
function mutliply(number,index){
    console.log("index is",index," number is ",number);
}
for( let i in number){
    mutliply(i,number[i]);
}
// if we use for each and call back function 
number.forEach(mutliply);
number.forEach(function(number,index){
    // anomymous function
    console.log("index is",index," number is ",number);
});
number.forEach(function(number,index,m,s){
    console.log(m,' ',s);
    // anomymous function
    console.log("index is",index," number is multipled by  ",2*number);
});

const users=[{firstname:"nkiran", age :18},
    {firstname:"qkiran", age :18},
];
users.forEach(function(user){
console.log(user.firstname);
});
users.forEach(user=>{
console.log(user.firstname);
})

// map method
const numbers=[12,3,4,5];
const square=function(number){
    return number*number;
}
const squarenumber=numbers.map(square);
// map function will create new array 
console.log(squarenumber);

// filter function
// it will create the new array 
 const oddeven=numbers.filter(n=>{
    return n%2===0;
});
console.log(oddeven);

// reduce 
const sum=numbers.reduce((accumulator,currentvalue)=>{
 return accumulator+currentvalue;
});
console.log("reduce function");
console.log(sum);
// every time accumulator value will be the previous return value 

const usercart=[
    {product:"mobile" ,price:123},
    {product :"laptop",price:345},

];
const total=usercart.reduce((totalprice,productprice)=>{
    return totalprice+productprice.price;
},100);
// inital value 0 
console.log(total);
//  sorting
const unsorted=[2,7,4,8,1,3,5,10];
// sort methos will change the original array 
// but foreach reduce map fillter will not change the array 

unsorted.sort();
//  sort will sort the number after converting into string using assci values 
//  in string it will taje the first index
console.log(unsorted);
const names=["abc","ABC","kiran","a rajath"];
names.sort();
console.log(names);
//  if want to sort number 
//  this will give in assecding order
unsorted.sort((a,b)=>{
return a-b;
})
console.log(unsorted);
unsorted.sort((a,b)=>{
    return b-a;
})
console.log(unsorted);

const usercart1=[
    {product:"mobile" ,price:1230},
    {product :"laptop",price:345},
    
 ];
  const lowtohigh=usercart1.slice(0).sort((a,b)=>{
    return a.price-b.price;

  });
   console.log(lowtohigh);

//    find method it will search the elements if the cundition satistifed then it will stop
const findarray=["kiran","cat","dog"];
const findans=findarray.find((string)=>{
    return string.length===3;
})
console.log(findans)
//   every method
// if every element give true for condition the every method gives true
const everyans=findarray.every((string)=>{
    return string .length===3;
})
 console.log(everyans);
//  some method 
// if the given condition true for any one element then it will giev true 
const someans=findarray.some((string)=>{
    return string .length===3;
});
console.log(someans);

// fill method it is same as array.fill in java
// value ,start , end
const myarray=new Array(10).fill(-1);
console.log(myarray);
myarray.fill(0,3,10);
console.log(myarray);

// splice method 
const myarr1=["item1","item2","item3"];
// it will delete the elemnt from 1 to 1 
myarr1.splice(1,1);
 console .log(myarr1);
 myarr1.splice(1,0,"inserted");
 console.log(myarr1);

//  three parameter are start howmanyelemntneedtodelete "inderted value "




