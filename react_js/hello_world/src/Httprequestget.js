import React, { Component } from 'react'
import axinos from 'axios'
 class Httprequestget extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        respone:[]
      }
    }
    componentDidMount(){
        //  this is going to return the promises 
        axinos.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            this.setState({
                respone:res.data
            })
        })
        .catch(error=>console.log(error.message))
    }
    
  render() {
    const {respone}=this.state
    return (
      <div>
        hello
        {
            respone.length ? respone.map(res=><div key={res.id}>{res.title}</div>):null
        }
      </div>
    )
  }
}

export default Httprequestget
