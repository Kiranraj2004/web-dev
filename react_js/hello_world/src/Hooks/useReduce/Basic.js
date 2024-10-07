/*  use reduce is a hook that is used for state management
 it is an alternative to use state
  what's the difference?
   -usestate is built using usereducer 
   
    reduce function in js || usereducer in react
     -it takes two parameter one is function and intal value || this is also going to take two parameter
      - its function will return the single value || but it returns new state  
      
      //  dif use state and use renducer
      --use usestate if we are using the number,string  and array will be used   for underreduce  
      number of state transition usestate -1or2 and use reducer too many */ 
      import React,{useState,useReducer} from 'react'
import { userContext } from '../Context/basic';
    //    i have implemented in normal use state and usereduce method
    const initialstate=0;
    const reducer=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;

            case 'reset':
                return initialstate;
            default:
                return state;
        }
    }

      function Basic1() {
        // const [count,setcount]=useState(0);
        // const increment=()=>{
        //     setcount(count+1);
        // }
        // const decrement=()=>{
        //     setcount(count+5);
        // }

        // const reset=()=>{
        //     setcount(0);
        // }
        //  above one is normal method
        const [count,dispatch]=useReducer(reducer,initialstate);
        /* useReducer( ) methods take two value one is reducer function and inital value of state
          and reducer methos will take two parameter state and action that we have to perform and return single value of new state and 
          usereducer will return a pair of values [newstatevalue ,dispatch]  dispatch is capable of reciveing the parameter which we have decleared in reducer function */
 


        return (
          <div>
             <h1> count value {count}</h1>
            <button onClick={()=>dispatch('increment')}> increment </button>
            <button onClick={()=>dispatch('decrement')}> decrement</button>
            <button  onClick={()=>dispatch('reset')}> reset</button>
            
          </div>
        )
      }
      
      export default Basic1
      

