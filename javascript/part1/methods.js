// function insider object
const person={
    firstname:"kiran ",
    age:20,
    about :function(){
        console.log(`person name is ${this.firstname} and age is ${this.age}`)
    }
}
person.about();


function info(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`)
}
const person1={
    firstname:"kiran ",
    age:20,
    about :info,
}
const person2={
    firstname:"kiran raj  ",
    age:18,
    about :info

}
 person1.about();
 person2.about();



 function myfun(){
    // if we use use strict in strict then it will give undefine 

    "use strict";
    // this will print the window object 
    console.log(this);
 }
 myfun();

function hello(){
    console.log("hello world");
}
hello.call();
//  another way to  call the function 
const user1={
    firstname:"kiran raj ",
    age:18,
    about :function(hobby,music){
        console.log(this.firstname, this.age,this.hobby,this.music);
    }

}
const user2={
    firstname:" raj ",
    age:9,

}
//   if now we want to access the about methos for user2
// then we hae to use call () function
user1.about();

 user1.about.call()
//  this give the undefine error
//  we hae to pass the which object is referening to it can be user1
user1.about.call(user1);
user1.about.call(user2);


function about (hobby,music){
    // only this is declare for object which we have to refere 
    console.log(this.firstname, this.age,hobby,music);
}
// call method
about.call(user2,"code","town");
// it is same as apply
about.apply(user1,["code","town"]);
//  bind will retur the function we can can  at any time 
func=about.bind(user2,"code","town");
func();