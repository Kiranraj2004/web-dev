import React, { Component } from 'react'
import Updatecount from './UpdateCounter'
//  a pattren where a function takes a component as an argument and returns a new component
 class HigherOrderfunction extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         however:0
      }
    }
    //  here the incrementcountand howeverhandler is same logic this can be replace with higher order function 

    // incrementcount=()=>{
    //     this.setState(prevstate=>{
    //         return {count:prevstate.count+1}
    //     })
    // }
    // howeverhandler=()=>{
    //     this.setState(prevstate=>{
    //         return {however:prevstate.however+1}
    //     })
    // }

    
  render() {
    const {count,incrementcounter}=this.props
    return (
      <div>
        <button onClick={incrementcounter}> clicked {count} time </button>
        {/* <h1 onMouseOver={incrementcounter}> this has however {count}</h1> */}
      </div>
    )
  }
}

export default Updatecount(HigherOrderfunction)
