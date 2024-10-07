import React, { useState } from 'react'
import HookMouse from './HookMouse';

function Mousecontainer() {
    const [display,setDisplay]=useState(false);

  return (
    <div>
        <button  onClick={()=>{
        setDisplay(true)
        }}> toggel</button>
        {!display&&<HookMouse></HookMouse>}
      
    </div>
  )
}

export default Mousecontainer
