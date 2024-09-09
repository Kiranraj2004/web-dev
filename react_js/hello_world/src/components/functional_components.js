// this are javascript function 
//  this can recive java script object (props ) properties
//  it can return html (jsx) content
import React from "react";

function Greet(){
    return <h1> hello kiran </h1>
}
//  use  arrow function to create function in react 

//  we have to import with same name if we not use  only export
export const Greet1=()=>{
    return <h1> hell kiran </h1>
}
// here we are exporting he function name 
  export default  Greet;
