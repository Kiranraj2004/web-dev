import React, { Component } from 'react'
 class UseEffectclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count}`

    }
    //  here when ever we have chnaged the text it was rendering so that if the count is same as prevoius then no need to render 
    //  this is called conditional rendering 
    componentDidUpdate(prev,prevstate){
      if(prevstate.count!==this.state.count){
         console.log("updating the elemts")
        document.title=`clicked ${this.state.count}`
      }
     
    }
    
  render() {
    return (
      <div>
        <input type='text'  value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>

        <button onClick={()=> {this.setState(prevstate=>({
            count:prevstate.count+1
        }))}}> increment {this.state.count}</button>
        
      </div>
    )
  }
}

export default UseEffectclass
