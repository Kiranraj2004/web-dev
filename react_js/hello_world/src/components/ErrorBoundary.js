//  when ever the render mehtod have any error it is going to break the whole react redering 
//  so in order to prevent this we have two methods to controll this 
//  error handling phase method
// it has two method 
// 1 static getDerivedstateFromError(error) -> is used to render a fallback ui after an error is thrown
// 2 componentDidCatch(error,info)-> method is used to log the error information
//  this can be used whenthere in an error either during rendering in a lifecycle method or in the constructor of any child conponent
import React from 'react'


function ErrorBoundary({heroname}) {
    if(heroname==="kiran"){
        throw new Error("not a hero!");
    }
  return (
    <div>
        {heroname} 
    </div>
  )
}

export default ErrorBoundary





