import React, { Component } from 'react'

 class Regcom extends Component {
  render() {
    console.log("regular component")

    return (
      <div>
        regular conponent
        {this.props.name}
      </div>
    )
  }
}

export default Regcom
