//  in this we have four methods
//1  getDerivedStateFromProps(props,state)-> this methos is called every time a component is re rendered
// set the state
// do not call any http request

// shouldComponentUpdate(nextprops,neststart) -> this is rarely used method according to react documentation 
//  this dictated if the component should re-render or not .
//  this is used for performance optimization 
//  do not cause side effects ex http request calling setstate method

// 3 render()-> only required method 
//  read props and satate return jsx
//  do not cganeg the state or interact with DOM or make any jsx calls 

// 4 getSnapshotBeforeUpdate(prevprops,prevstate)-> this also rarely used method . it will return null or value 

// componentDidUpdate(prevprops,prevState,snapshot )-> called after render is finished in the re-render cycles. you can make ajsx call
import React, { Component } from 'react'

// the  order of execution is 
 class LifecycleUA extends Component {
  // first
    constructor(props) {
      super(props)
  
      this.state = {
         name:"kiran "
      }
      console.log("constructor updating methods");
    }
    //  second 
    shouldComponentUpdate(){
        console.log(" shouldComponentupdate ")
        return true
    }
    // last after all the child lifecycle method execution 
getSnapshotBeforeUpdate(prevprops,prevState){
    console.log('getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('componentDidUpdate')
}
// third 
  render() {
    // here we can also call the child component so that after the this execution it will compile the child component 
    //  then after it will go to componentDidMount()
    // ex
    
    console.log('render mehtod')
    return (
        
      <div>
        render
      </div>
    )
  }
}
export default LifecycleUA
//  unmounting phase method it has only one method 
//  componentwillUnmount() -> mehtod is nve=oked immediately before a component is unmounted and destroyed
//  in this method we can do cancelling any network request, removing event handlers, cancelling nay subscription and also invalidating timers.
//   do not call the setstate method

//  error handling phase method
// it has two method 
// 1 static getDerivedstateFromError(error)
// 2 componentDidCatch(error,info)->
//  this can be used whenthere in an error either during rendering in a lifecycle method or in the constructor of any child conponent


