import React, { Component } from 'react'
import { Userconsumer } from './Contextdemo'

 class ComonentA extends Component {
  render() {
    return (
        <Userconsumer>
            {
                (username)=>{
                    return <div>
                    compoent A
                    {username}
            
                  </div>

                }
            }
        </Userconsumer>
      
    )
  }
}

export default ComonentA
