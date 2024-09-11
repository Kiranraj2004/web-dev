import React, { Component } from 'react'
//  the snipt for class component is rce
 class Counter extends Component {
    // we have to create state using constructure rconst
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcount(){
        //  without using the setstate methos 
        // this.state.count=this.state.count+1;
        // console.log(this.state.count);
        // if we use the state the ui element dont change but in console will change
        // the set state is asynchrones method  which takes some time to increment
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log(this.state.count);
        // })
        // if we have to execute any thing aftr the setstate methos pass it in second parameter
        // setstate it can take two parameter one is object andthoer one is callback function
        this.setState(prevstate=>({
            count:prevstate.count+1
        }))
    }
    incrementcountfive(){
        this.incrementcount();
        this.incrementcount();
        this.incrementcount();
        this.incrementcount();
        this.incrementcount();
    }
    
  render() {
    return (
      <div>
        <h1>count  -{this.state.count}</h1><br></br>
        <button onClick={()=>{
            this.incrementcountfive();
        }}> increment</button>
      </div>
    )
  }
}

export default Counter
