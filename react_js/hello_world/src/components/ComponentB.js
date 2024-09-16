//  conetxt provides a way to pass data through the compoenent tree without having to pass props down manually at every level
import React, { Component } from 'react'
import ComonentA from './ComonentA'

//  1 create the context
// 2 provide a context value
// 3 consume the context value
 class ComponentB extends Component {
  render() {
    return (
      <div>
        <ComonentA></ComonentA>
      </div>
    )
  }
}
export default ComponentB
