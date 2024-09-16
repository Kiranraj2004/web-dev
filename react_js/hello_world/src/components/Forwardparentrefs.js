import React, { Component } from 'react'
import Forwardrefs from './Forwardrefs'

 class Forwardparentrefs extends Component {
    constructor(props) {
      super(props)
    this.inputref=React.createRef()  
    this.i=React.createRef();
    }
    
  render() {
    return (
      <div>
        <Forwardrefs ref={this.inputref}/>
        <button>focus input</button>  
        <input type="text" ref={this.i}></input>
      </div>
    )
  }
}

export default Forwardparentrefs
