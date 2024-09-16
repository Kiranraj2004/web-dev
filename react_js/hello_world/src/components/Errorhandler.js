import React, { Component } from 'react'

 class Errorhandler extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           haserror:false
        }
      }
      static getDerivedstateFromError(error){
          return {
              haserror:true
          } 
      }
      componentDidCatch(error,info){
        console.log(info)
      }
      
    render() {
      if(this.state.haserror){
          return <h1> somthing went wrong </h1>
      }
      return this.props.children
    }
}

export default Errorhandler
