// there are four life cycle methods 
// 1 mounting - when a instance of a component is being created and inserted into DOM
// 2 updating -when a component is being re-reneder as a result chnages to either its props or state
// 3 unmounting - when a component is being removed from the DOM
// 4 error handling - when there is an error during rendering , in a lifecycle method , or in the constructor of any child component 

//  1 mounting lifecycle methods
// -> constructor(props) - special fiunction that will get called whenever a new component is created 
//  it is used for the initializing state , binding even handlers 
//  do not cause side effect ex: HTTP requests 
// we have to use super(props) to call the base class

// -> static getDerivedDtateFromProps(props,state)
// when the state of the component depend on changes in props over time 
//   used for set the state
//  dont use the Http request


// render()-> only required method 
//  read props &state and return JSX
//  do not chnage the state or interact with DOM oe make ajax calls.
//  childewn components lifecycle method are also executed

// componentDidMount()->  invoked immediately after a component and all its children component have been render to the DOM
//  can can call the Http request here 
import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
// the  order of execution is 
 class Lifecycle extends Component {
  // first
    constructor(props) {
      super(props)
  
      this.state = {
         name:"kiran "
      }
      console.log("constructor");
    }
    //  second 
    static getDerivedStateFromProps(props,state){
        //  it has to return the new state or null 
        console.log(" getDerivedStateFromProrps")
        return null;
    }
    // last after all the child lifecycle method execution 
componentDidMount(){
    console.log('this componentDidMount')
}
    // third 
  render() {
    // here we can also call the child component so that after the this execution it will compile the child component 
    //  then after it will go to componentDidMount()
    // ex

    console.log('render mehtod')
    return (
      <div>
        <LifecycleB></LifecycleB>
        render
      </div>
    )
  }
}
export default Lifecycle

