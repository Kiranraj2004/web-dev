//  javascript xml(jsx)- extension to the javascript language syntax
// wriet xml like code for element and components
// jsx tags have a name attributes and children 
// jsx is not necessity to wriet react application
//  jsx make our react code simpler and elegant
// jsx ultimately transpiles to pure javascript which is understand by all browsers
import React from "react";

const Hello = () => {
   // return (
        //  this is using java script functional component 
        // <div className:'fill>
        //     <h1>hello kiran raj</h1>
        //     <p>hi I am from ypr</p>
        // </div>
   // );
   return React.createElement('div',
    {id:'hello', className:"dummy"},
    React.createElement('h1',null,"hello kia"));
//    jsx takes 3 parameter 1 tag 2 null optinal properties  attribute,3 content which we have to display
//  here we use className because class is reserverd keyword for object and class

}


export default Hello;
