import React, { Component } from 'react'
 class RefsDemo extends Component {
     constructor(props) {
       super(props)
       this.inputref=React.createRef()
    //    second method
       this.cbref=null
       this.setcbref=(element)=>{
        this.cbref=element
       }

     }
    //   this is used when ever the user enther the sign in page the 
    // user can directly start typing because it is going to focus on user
    //  name or any other we have define that 

    //  componentDidMount(){
    //     this.inputref.current.focus()
    //     console.log(this.inputref)
    //  }
    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
    }
    //   this is one mehtod of cretaing the refers
    //   ref can also used to get the data fromthe element
clickhandler=()=>{
    alert(this.inputref.current.value)
}
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputref}></input> */}
        <input type="text" ref={this.setcbref}></input>
        <button onClick={this.clickhandler}>submit</button>
        
      </div>
    )
  }
}

export default RefsDemo
