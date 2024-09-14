import React, { Component } from 'react'

// the  order of execution is 
 class LifecycleB extends Component {
  // first
    constructor(props) {
      super(props)
  
      this.state = {
         name:"kiran "
      }
      console.log("constructor B");
    }
    //  second 
    static getDerivedStateFromProps(props,state){
        //  it has to return the new state or null 
        console.log(" getDerivedStateFromProrps B")
        return null;
    }
    // last after all the child lifecycle method execution 
componentDidMount(){
    console.log('this componentDidMount B')
}
    // third 
  render() {
    // here we can also call the child component so that after the this execution it will compile the child component 
    //  then after it will go to componentDidMount()
    // ex
    
    console.log('render mehtod B')
    return (
        
      <div>
        render
      </div>
    )
  }
}
export default LifecycleB