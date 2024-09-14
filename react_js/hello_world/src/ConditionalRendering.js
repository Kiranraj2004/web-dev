import React, { Component } from 'react'
//  we have if else , element variable , ternary conditional operator, short circuit operator

 class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
                hello kiran
            </div>
        )
    }
    else{
        return (
            <div>
                hello guest
            </div>
        )
    }
    // vaiable element method
    // we can also use javascript variables
    // let message
    // if(this.state.isLoggedIn){
    //   message=<h1>hello kiran</h1>
    // }
    // else{
    //   message=<h1>hello guest</h1>
    // }
    // return <div>{message}</div>
    // return (
  //     <div>
        
       

  //    welcome Kiran
  //     </div>
  //   )
  // }
  // we can use the ternary operator
  // return(
  //   this.state.isLoggedIn?
  //   <div>wellcome kiran</div>:
  //   <div>wello guest</div>
  // )
  //  short circit method
  // return this.state.isLoggedIn &&<div>hello kiran </div>

  }
 }

export default ConditionalRendering
