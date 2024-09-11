import React, { Component } from 'react';
// react events are component are made of camel case Variable

//  function Event () {
//     function clickhandler(){
//         console.log(" button clicked");
//     }
//   return (
//     <div>
//         {/* here we can use the function () paranthesis it is just function */}
//       <button onClick={clickhandler}>submit</button>
//     </div>
//   )
// }
//  how we work with the class component
 class Event extends Component {
    clickhandler(){
        console.log("ans");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>submit</button>
      </div>
    )
  }
}

export default Event;
