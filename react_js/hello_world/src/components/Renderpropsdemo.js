import React, { Component } from 'react'
// the term render prop refers to sharing code between react comonent using props whose value is function 
 class Renderpropsdemo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementcount=()=>{
          this.setState(prevstate=>{
              return {count:prevstate.count+1}
          })  
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.state.incrementcount)}
      </div>
    )
  }
}

export default Renderpropsdemo
