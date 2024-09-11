import React, { Component } from 'react'

 class Event_Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
      this.changestate=this.changestate.bind(this);
    }
    changestate(){
        this.setState({
            message:"hello iam changed"
        })
    }
    // we can aso use the arrow function
    // changestate=()=>{
    //     this.setState({
    //         message:"hello world"
    //     })
    // }
    
  render() {
    return (
      <div>
        {this.state.message}<br></br>
        {/* here we are binding the function with this method */}
        <button onClick={this.changestate.bind(this)}>click</button>
        {/* we can use arrow function */}
        <button onClick={()=>{
            this.changestate()}}> change the state</button>
            {/* we can also write the binding methos in constructure */}
            <button onClick={this.changestate}></button>
        
      </div>
    )
  }
}

export default Event_Binding
