import React, { Component } from 'react'
import Regcom from './Regcom'
import Purecom from './Pureco'
import MemoComp from './components/MemoComp'

 class Parentregularcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"kiran"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"kiran"
            })
        },2000)
    }

    
  render() {
    console.log(" parent regular component")
    return (
      <div>
        parent regular component
        {/* <Regcom name={this.state.name}></Regcom>
        <Purecom name={this.state.name} ></Purecom> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default Parentregularcomponent
