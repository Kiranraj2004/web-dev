import React from 'react'
import { userContext,channel } from './basic'

//  step 3 import the cotext
function ComponentB() {
  return (
    <div>
        <userContext.Consumer>
            {
                user=>{
                    return(
                        <channel.Consumer>
                            {
                                c=>{
                                 return (
                                   <div>
                                        user name{user} his usn is {c}
                                    </div>
                                 )
                                }
                            }
                        </channel.Consumer>
                    )
                }
            }
        </userContext.Consumer>

        <h1> hello world</h1>
      
    </div>
  )
}

export default ComponentB
