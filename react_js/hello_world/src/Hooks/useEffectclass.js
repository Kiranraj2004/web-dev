import React, { Component } from 'react'
 class UseEffectclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count}`

    }
    componentDidUpdate(prev,prevstate){
        document.title=`clicked ${this.state.count}`
    }
    
  render() {
    return (
      <div>
        <button onClick={()=> {this.setState(prevstate=>({
            count:prevstate.count+1
        }))}}> increment</button>
        
      </div>
    )
  }
}

export default UseEffectclass
