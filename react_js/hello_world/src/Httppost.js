import React, { Component } from 'react'
import axios from 'axios'
 class Httppost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
         title:'',
         body:'',

      }
    }
    handler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    submithandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>console.log(res))
        .catch(c=>console.log(c))
    }
    
  render() {
    const {userid,title,body}=this.state
    return (
      <div>
        <form onSubmit={this.submithandler}>
            <input type="text" name="userid" value={userid} onChange={this.handler}></input><br></br>
            <input type="text" name="title" value={title} onChange={this.handler}></input><br></br>
            <input type="text" name="body" value={body} onChange={this.handler}></input><br></br>
            <button >submit</button>
        </form>
        
      </div>
    )
  }
}

export default Httppost
