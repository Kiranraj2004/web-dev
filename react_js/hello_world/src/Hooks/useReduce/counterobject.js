import React,{useState,useReducer} from 'react'
    const initialstate={first:0,second:10};
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {...state,first:state.first+action.value};
            case 'decrement':
                return {...state,first:state.first-action.value};

            case 'reset':
                return initialstate;
            default:
                return state;
        }
    }

      function Counetrobject() {
        const [count,dispatch]=useReducer(reducer,initialstate);    
    return (
          <div>
            <div>
                {count.second}
            </div>
             <h1> count value {count.first}</h1>
            <button onClick={()=>dispatch({type:'increment',value:1})}> increment </button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}> decrement</button>
            <button  onClick={()=>dispatch({type:'reset'})}> reset</button>
            
          </div>
        )
      }
      
      export default Counetrobject