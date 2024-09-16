import React from 'react'
//  this file is used to ahow the how the pure component can be used in the functional component
function MemoComp({name}) {
    console.log("memo comp")
  return (
    <div>
      {name}
    </div>
  )
}
//  this is going to render again and agian but the name is same 
//  to avoid this 
//  same as pure compoenet class
// use 
export default React.memo(MemoComp)
