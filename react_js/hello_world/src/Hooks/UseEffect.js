// the effect hook lets you perform side effect in function component 
// it is a close replacement for componentDidMount,componentDidUpdate and componentWillUnmount
import React,{useState,useEffect} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);
    //  this use effect will render ever time 
    useEffect(()=>{
        document.title=`your count value ${count}`;
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}> increment {count}</button>
      
    </div>
  )
}

export default UseEffect
