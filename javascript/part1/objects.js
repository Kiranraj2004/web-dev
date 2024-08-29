// object are reference type
// objects store key value pair
const person={name:"kiran ",age :22,
    "person hobbies":[1,2,4]
};

// console.log(person.name);
//  console.log(person);
//  console.log(person.hobbies[0]);
//   adding element to object
// person.gender="male";
person["gender"]='male';
console.log(person)
console.log(person['person hobbies']);
const key="email";
person[key]="kiran @gmail";
console.log(person)

// iteration on objects
for (let s in person){
    // console.log(person[s]);
    // console.log(`${s} : ${person[s]}`);
    console.log(s," : ",person[s]);
}

// it will five only key  in he form of array names
console.log(Object.keys(person))
// it gives only values 
console.log(Object.values(person))

for (let key of Object.keys(person)){
    console.log(person[key]);
}

// computed properties
const a="hi";
const b="world";
const value1=1;
const val2=3;

 const obj={
    [val2]:b,
    [a]:value1,
    [b]:val2,
   

 }
 console.log(obj);

//   spread operator in object
const obj1={
    key1:1,
    key2:2,
}
console.log(obj1);
const obj2={
    key3:1,
    key4:2,
    key1:4

}
const r={...obj1,...obj2};
console.log(r);

let obj3={..."dnsbhdhnd"};
console.log(obj3);
obj3={...['l',"new "]};
console.log(obj3);

// destructing
const band={
    bandline:"bts",
    phone:"39293",
    year:83923,
    country:"korea",
}
// const a1=band.bandline;
// console.log(a1);
const {bandline,phone,...k}=band;
console.log(bandline ," ", phone)
console.log(k);

// objects inside array
const user=[
    {username:1,name:"kiran",},
    {username:2,name:"arya",},
    {username:3,name:"stark",}
];
console.log(user);

for(let use of user){
    console.log(use.name ," ",use.username);
}

// nested destructuring 
const [user1,user2]=user;
console.log(user1);
console.log(user2);
//  if we needed the name from user one and id from second user we use this
const [{username:userid , name:name1}, ,{name}]=user;
console.log(userid ,name1, name);

// optional chaining
const user3={
    firstname:'kiran',
    address:{housenumber:10},
}
console.log(user3?.firstname);
// ?. this will check the existance of the object then only it will accesss
console.log(user3?.address?.housenumber)





