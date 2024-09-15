import React from 'react'

function Fragments() {
  return (
    //  here in this we are enclosing the  elements in div tag and it is been added to dom tree
    // <div>
    // <h1>
    //   Fragments demo
    // </h1>
    // <p>this is another tag in the Fragments </p>
    // </div>
    //  if we use this then h1 and p tag are diferent tags it dom tree
    <React.Fragment>
    <h1>
      Fragments demo
    </h1>
    <p>this is another tag in the Fragments </p>
    </React.Fragment>
    // <></>== <React.Fragment></React.Fragment>
  )
}

export default Fragments
