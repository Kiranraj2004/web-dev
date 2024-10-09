import React from 'react'
import { useParams } from 'react-router-dom'
const Userdetails = () => {
    const params=useParams();
    const userid=params.userId
;  return (
    <div>
        user data {userid}
      
    </div>
  )
}

export default Userdetails
