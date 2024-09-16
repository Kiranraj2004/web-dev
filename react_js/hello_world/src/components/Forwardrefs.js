import React from 'react'

// function Forwardrefs() {
//   return (
//     <div>
//       <input type="text"></input>
//       <button>focus input</button>  
//     </div>
//   )
// }

// we have to create the reacr.forwardref refs so that we are using the arrowfunction
// functional component takes props as parameter but in this it also take the refs as second parameter
const Forwardrefs=React.forwardRef((props,ref)=> {
    return (
      <div>
        <input type="text" ref={ref}></input>
        
      </div>
    )
  })

export default Forwardrefs
