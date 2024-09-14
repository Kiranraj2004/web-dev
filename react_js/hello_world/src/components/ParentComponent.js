import React, { Component } from 'react'
import ChildFunction from './childComponent';
 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"parent"
      }
      this.greetparent=this.greetparent.bind(this);
    }
    greetparent(Childmethod){
        alert("hello"+this.state.parentname+" from "+Childmethod );
        // alert(`hello${this.state.parentname}`);
        // we can also wriet like this using the template littarels
    }
    
  render() {
    return (
      <div>
     <ChildFunction greetparent={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent;
