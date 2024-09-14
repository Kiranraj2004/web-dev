import React from 'react'

 function ChildFunction(props) {
  return (
    <div>
      {/* <button onClick={props.greetparent}>Greet parent</button> */}
      <button onClick={()=>props.greetparent('Childmethod')}> click me</button>
      {/*  we can also write arrow function */}
    </div>
  );
}
 export default ChildFunction;
