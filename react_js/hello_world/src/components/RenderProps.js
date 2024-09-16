import React, { Component } from 'react'

 class RenderProps extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementcount=()=>{
    //     this.setState(prevstate=>{
    //         return {count:prevstate.count+1}
    //     })
        
    // }
    // here that button as to increase in count value also the however method also has this counter variable which should increment the 
    // every time however on it in both the componenet we are doing the same we are not reusing the function this can be achive by renderprops

    
  render() {
    const {count,incrementcount}=this.props
    return (
      <div>
        <button onClick={incrementcount}>clicked {count} times</button>
    
      </div>
    )
  }
}

export default RenderProps
