import React, { useReducer } from 'react'
import ComponentA from './ComponentA'


//  our goal is to changing the state in global state
// you can see in  componentb file structure component 

//  step 2 declaring the conetxt hooks
export const  CountContext=React.createContext();
//  step 1  create the context
const initialstate=(0);
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1

        case 'reset':
            return initialstate;
        default:
            return state;
    }
}
function UseContext() {
  const [count,dispatch]=useReducer(reducer,initialstate);
  return (
    
    <div>

      {/*  step 2  */}
      <CountContext.Provider  value={{constate:count,countDispatch:dispatch}}>
      <ComponentA></ComponentA>
      </CountContext.Provider>
      
      
      {/*  we are using the context api in other featue*/}

      
    </div>
  )
}

export default UseContext
