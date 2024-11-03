//  context provides a way to pass data thorugh the component tree without having to pass the props down manually at every level
// ex we have to pass the props to the b component the hirarchey f the compoment are root->a->b now we know that we to pass the props the to a adn then b so a doesn required the props we are passing
//  ..this can be address  by the context hooks

// how to create the context 
import React from 'react'
import ComponentA from './ComponentA'
import ContexthooksB from './ContexthooksB';
//  this is the main component   
//  it is nested in basic ->componentA->componentB
//  we have to pass the props to the  componentB

//  step 1 creating the context
 export const userContext=React.createContext();
 export const channel=React.createContext();
function Basic() {
  return (
    <div>
        {/* step 2 assign the values to that and warping the children inside that  because the context value should be used in that component */}
        <userContext.Provider value={'kiran'}>
            <channel.Provider value={'1nh22ai075'}>
            <ComponentA></ComponentA>
            <ContexthooksB></ContexthooksB>
            </channel.Provider>
            
        </userContext.Provider>
        

        {/*  step3 is in componentb */}
       
    </div>
  )
}

//  we can do this using the context hooks for that the first two steps will be same  
//  ima going to do in contexthooks.js file 

export default Basic
