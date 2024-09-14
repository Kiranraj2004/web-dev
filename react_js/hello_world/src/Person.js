import React from 'react'

function Person({props}) {
  return (
    <div>
        <h2>hi iam . {props.name} and my age is {props.age}</h2>
      
    </div>
  )
}

export default Person
