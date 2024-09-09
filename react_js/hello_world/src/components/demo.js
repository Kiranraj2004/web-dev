//  the main component is root component 
//  inside we can have several component to display of browser ui
// component code code is place in javascript file .js extention
//  there are two component
//  1 staeless functional component  .it discribe the ui element
function wellcome(parameter){
    return <h1> hello {parameter}</h1>;
}
// 2 stefull class component. this will extending the compoent class and render method returnig HTML
class wellcome extends React.Component {
 render(){
    return <h1> hello {parameter}</h1>;
 }
}

