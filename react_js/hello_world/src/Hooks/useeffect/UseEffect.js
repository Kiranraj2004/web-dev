// the effect hook lets you perform side effect in function component 
// it is a close replacement for componentDidMount,componentDidUpdate and componentWillUnmount
import React,{useState,useEffect} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);
    //  this use effect will render ever time when ever the count value changes 
    // conditional rendring
    const [name,setName]=useState('')

    useEffect(()=>{
      console.log("updating the Text");
        document.title=`your count value ${count}`;
    },[count])

    // if we want to conditional render the elements then use effest take second parameter as array in 
    // that we can inclde the state and props
  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}> increment {count}</button>
      
    </div>
  )
}

export default UseEffect
