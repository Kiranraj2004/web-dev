//   es6 class  it can also recive the properties (props) and return html (jsx)
//  it can maintain state which can contain info belong to that component 
import React,{Component} from "react"

class welcome extends Component{
    //  render method can return the null or html 
    render(){
        return <h1>class component</h1>
    }
}
 export default welcome;
//   this keyword is used in class component in function there is no this 
//  this will provide lifecycle hooks