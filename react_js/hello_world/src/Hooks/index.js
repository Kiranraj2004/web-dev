// hooks are a new feature addition in react version which allow yoou to use react feature wihotut having to wriet a class
import React, { Component } from 'react'

 class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incremenetcount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    incremenetcountfive =()=>{
        this.setState(prev=>{
            return {count:prev.count+5}
         
        })
    }
    
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incremenetcount}> count{this.state.count}</button>
        <button onClick={this.incremenetcountfive}>  incrementfive</button>
        
      </div>
    )
  }
}

export default Index
