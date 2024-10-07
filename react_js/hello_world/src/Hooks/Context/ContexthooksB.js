import React,{useContext}from 'react'
import { userContext,channel } from './basic'


function ContexthooksB() {

    //  step 3 in the context hooks 
    const user=useContext(userContext);
    const usn=useContext(channel);
  return (
    <div>
         name :  {user} <br></br>
         usn : {usn}
      
    </div>
  )
}

export default ContexthooksB
