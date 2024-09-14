import React from 'react'
import './mystyle.css';
const head={
    //  the key should be in camel case 
    fontSize:'72px',
    color:'yellow',
}
function Style_sheet() {
  return (
    <div>
        {/*  if we have to apply the two properties in one component we can use the template litarels  */}
        {/* this is extarnal css */}
      <h1 className={`primary font`}> sytle sheet</h1>
      {/* inline css we have to create the css properties object then we are going to add */}
      <h1 style={head}> kiran raj </h1>
      
    </div>
  )
}

export default Style_sheet
