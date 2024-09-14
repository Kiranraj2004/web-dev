import React from 'react'
import Person from './Person'
function Namelist() {
    const names=['kiran','arya','mithun']
    const namelist=names.map((name)=><h2>{name}</h2>)
    //  what if we had object
    const persons=[
        {id:1,name:"kiran",age:29},
        {id:2,name:"arya",age:30},
    ]
    // const personlist=persons.map((person)=> <h2>hi iam . {person.name} and my age is {person.age}</h2>
    // )

    const personlist=persons.map((person)=> <Person key ={person.id} props={person}></Person> )
    const namelist1=names.map((name,index)=><h2 ket={index}>{name}</h2>)
    //  here we are passig the key if we dont pass it will give error
    //  when to use the index as key?
    // when our list don't have the unique id 
    //  the list is static and it will not change
    //  the list never be reorder or filtereds 

  return (
    <div>
        {/* <h1>{names[0]}</h1>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {/* {
            names.map((name)=><h2>{name}</h2>)
        } */}
        {/*  we can use the variables of java script */}
        {/* {namelist}
        {personlist} */}
        {/* this  will display the content but it will giev the error in console in orrder to solve this  we are going to use the parent and child component*/}
        {/*  and in the attributes or props we have give the key in person which is uniqueue it can be any here the id in unique */}
        {/*  we can't render the key props in child class */}
        {personlist}

    </div>
  )
}

export default Namelist;
