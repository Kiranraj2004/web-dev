let str="kiran";
 console.log(str);
//  lenght
console.log(str.length);
// indexing
 console.log(str[3]);

//  string inbuilt function
// trim()
//  strings are inmutable
let str1="mithun     ";
 console.log(str1.length);
console.log( str1.trim());
str1=str1.trim();
console.log(str1.length)
// to upercase
console.log(str1.toUpperCase());

console.log(str1.toLowerCase());

// in will not consider the 4 th index element 

console.log(str1.slice(1,4));

// string concatination

let a="hello";
let b="world";
console.log(a+b);


// template string
let age=22;
let name="kiran";
// let res="hello my name is "+name+" and my age is "+age;
let res=`hello my name is ${name} and my age is ${age}`;
console.log(res);
