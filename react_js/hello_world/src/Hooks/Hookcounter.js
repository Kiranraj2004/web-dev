import React,{useState} from 'react'

function Hookcounter() {
    const [count,setCount]=useState(0);
    const incrementfive=()=>{
        setCount(prevcount=>prevcount+5)

    }

  return (
    <div>
        count: {count}
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decremenet</button>
        <button onClick={()=>setCount(prev=>prev+5)}>increment5</button>
        {/*  onclick takes the whole function   */}
        <button onClick={incrementfive}>increment5</button>

    </div>
  )
}

export default Hookcounter
