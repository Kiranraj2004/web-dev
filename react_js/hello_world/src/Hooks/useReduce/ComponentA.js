import React,{useContext} from 'react'
import ComponentB from './ComponentB'
import { CountContext } from './UseContext';

function ComponentA() {
    const countContext=useContext(CountContext);
  return (
    <div>
        {countContext.constate}
         <button onClick={()=>countContext.countDispatch('increment')}> increment </button>
            <button onClick={()=>countContext.countDispatch('decrement')}> decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}></button>
      
      <ComponentB></ComponentB>
    </div>
  )
}

export default ComponentA
