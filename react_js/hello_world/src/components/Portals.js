import React from 'react'
import ReactDOM from 'react-dom'

function Portals() {
  return ReactDOM.createPortal((
    <div>
        <h1> hello this is the Portals</h1>
    </div>
  ),document.getElementById("portals-demo")
)
}
//  which two parameter first component jsx and second id 
//  portals are used because all the component falls under the  root div tags but we can create our own div tag in which some tags can 
// fall under the thid div tags

export default Portals
