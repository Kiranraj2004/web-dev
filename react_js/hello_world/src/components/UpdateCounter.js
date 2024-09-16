import React from "react";
const Updatecount=(Originalcomponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        incrementcounter=()=>{
            this.setState(prevstate=>{
                return {count:prevstate.count+1}
            })
        }

        render(){
            return (
                <Originalcomponent count={this.state.count} incrementcounter={this.incrementcounter}
            {...this.props}></Originalcomponent>
            )
        }
    }
    return NewComponent
}
export default Updatecount