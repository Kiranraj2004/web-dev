import React ,{useEffect,useRef} from 'react'
//  it us used to focus on the any elements
function userefs() {
  // inital value
  const inputref=useRef(null);
  useEffect(()=>{
    inputref.current.focus();
  },[])
  return (
   

    <div>
      <input ref={inputref} type='text'></input>

    </div>
  )
}

export default userefs
