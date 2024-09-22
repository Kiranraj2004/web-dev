import React ,{useState} from 'react'


function Functionalcounter() {  
    //  use sate has the give two variable one is 
    // name of the variable and methos used to change that variable

    const [count,setCount]=useState(0)
  return (
    <div>
    <button onClick={()=>setCount(count+1)}>  count {count}</button>
    </div>
  )
}
// only call hooks at top level , don't call hooks inside loops, condition ,or nested function 
// only call hooks from react function

export default Functionalcounter
