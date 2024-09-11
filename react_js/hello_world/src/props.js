import React, { Component } from "react";
// const Display=(props)=>{
//     console.log(props);
//     return (
//         <div>
//     <h1>hello {props.name} and hero {props.hero}
//     </h1>
//     {props.children}
//     </div>
//     );
//     //  it will be use full for dynamic content
//     //  we can return only one html tag so that we have to rap the content insdie to that

// }
// we can pass parameter directly
// const Display=(name,hero)=>{
//         return (
//             <div>
//         <h1>hello {name} and hero {hero}
//         </h1>
//         {props.children}
//         </div>
//         );
//     }
    //  we can also destructure methos attributes inside the body
    // const Display=(props)=>{
    //     const {name,hero}=props
    //     return (
    //         <div>
    //     <h1>hello {name} and hero {hero}
    //     </h1>
    //     {props.children}
    //     </div>
    //     );
    // }
// class Welcome extends Component{
//     render(){
//         return <h1> welcome {this.props.name} a.k {this.props.hero}</h1>
//     }
    // we have to use the this key word for this  
// }
// props are imutable
// here we are using the input of the user
//  how we can destructure in class component

class Welcome extends Component{
    render(){
    const {name,hero}=this.props;
        return <h1> welcome {name} a.k {hero}</h1>
    }
    // we have to use the this key word for this  
}
export default Welcome;