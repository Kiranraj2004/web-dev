import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigatePrograminly() {
    const navigate=useNavigate();
  return (
    <div>

        {/*  -1 is used to go back  */}
        order confirm
        <button onClick={()=>navigate(-1)}>go back</button>
      
    </div>
  )
}

export default NavigatePrograminly
