import React, { PureComponent } from 'react'
//  this this another method to create the class component which extends the PureComponent 
//  before this we were extending the Component class
//   the diff is when ever we call this child pure component  it will log at first but after the chagne it state it will not even going console but ht ui will change 
//  this is because the pure component class wil redender when there is change in the props or state by using the shallow comparion for primitive nad complex variable 
 class Purecom extends PureComponent {
  render() {
    console.log("pure  component")

    return (
      <div>
        prue component
        {this.props.name}
      </div>
    )
  }
}

export default Purecom
