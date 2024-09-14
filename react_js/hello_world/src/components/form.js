import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username:'',
         topic :'css'
      }
    }
    handelusername=(event)=>{
    this.setState({
        username:event.target.value
    })
    }
    handelselect=(event)=>{
        this.setState({
            topic:event.target.value
        })
        }
        handelsubmit=(event)=>{
            alert(`${this.state.topic} ${this.state.username}`)
            event.preventDefault()

        }
    
  render() {
    return (
        <form onSubmit={this.handelsubmit}>
        <div>
            <label> user name</label>
            <input type='text' value={this.state.username} 
            onChange={this.handelusername}
            placeholder='dnjnjjdj'></input>
            <textarea></textarea>
            {/*  select option in form */}
            <label> topic </label>
            <select value={this.state.topic} onChange={this.handelselect}>
                <option value="react">react</option>
                <option value="html">html</option>
                <option value="css">css</option>
            </select>

            <button type='submit'> submit</button>
        
        </div>
        </form>
      
    )
  }
}

export default Form
