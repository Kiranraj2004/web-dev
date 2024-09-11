//  component state
// props are immutable | state can be change
// function parameter |variable declared in function body\
// props get passed to component | stte is manage with the component
//  props- functionl componemt this.props -class component |   usestate hook -functionalcomponent this.state-class component
//  class component
import React, { Component } from "react";
class Message extends Component{
    //  here we are creating the state  object of this class
    constructor(){
        super()
        this.state={
            message:"welcome visitor"
        }
    }
   changeMessage(){
    // setstate which takes object 
    this.setState({
        message:"thank you for subcribing "
    })

    }
    render(){
        //  if 
        // return <h1> welome visitor </h1>
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{
                    this.changeMessage()}}> subscribe</button>
            </div>

        ) 
    }
}
export default Message;
