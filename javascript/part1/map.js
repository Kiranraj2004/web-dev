//  it has key value pair
//  object very key is convert into string
const users=[{1:2,
    kiran:"name",
}
]
 console.log(users[0]);
 for(let key in users){

    console.log(key);
    console.log(typeof(key));
 }
const person =new Map();
person.set("first name"," kiran ");
person.set("age",19);
person.set(1,"one");
console.log(person.get(1));
console.log(person.keys())