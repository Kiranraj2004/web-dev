import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setx]=useState(0);
    const[y,sety]=useState(0);
    const logmouseposition=(e)=>{
        console.log("mouse event")
        setx(e.clientX);
        sety(e.clientY)

    }
    useEffect(()=>{
        console.log("use effect");
        window.addEventListener('mousemove',logmouseposition)
        return ()=>{
            console.log("clean up the eent handler");
            window.removeEventListener('mousemove',logmouseposition);
        }
    },[])
    //   if we pass the empty array then use effect is only calles at once it does not depend on any props state 

    // ... if we want to stop the the use effect in b/t then this is going to return the valuse where we remove the handler
    //  in class compoment there is a componemtwillMount() 
    

  return (
    <div>
       hooks x-{x} y-{y}
      
    </div>
  )
}

export default HookMouse
