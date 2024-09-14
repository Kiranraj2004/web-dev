//  import logo from './logo.svg';
import './App.css';
// import Hello from './jsx';
// import Greet from './components/functional_components';
// import Greet from './components/functional_components';
// import welcome from './components/class_components';
//  Greet   can be name has any think if we use default export 
// we can inport the component greet like this 
// import {Greet1} from './components/functional_components'
// import Display from './props';
// import Message from './state';
// import Counter from './components/counter';
// import Event from './Event_handeling';
// import Eventbinding from './Event_Binding';
// import ParentComponent from './components/ParentComponent';
// import ConditionalRendering from './ConditionalRendering';
// import Namelist from './list';
// import Style_sheet from './components/Style_sheet';
// import Form from './components/form';
import Lifecycle from './LifecycleA';
import LifecycleUA from './Updating_Lifecycle';
function App() {
  return (
    <div className="App">
      {/* <Event></Event>
      <Eventbinding></Eventbinding> */}
      {/* <Display></Display>
      <Counter></Counter> */}

      {/* <Hello></Hello>
      <Hello /> */}
      {/* <Display name="arya" hero="batman">
        <p> new hrizon</p>
      </Display>
       <Display name ="kiraan"/> */}
      {/* <Display name="mahesh" hero="batman">
        <button> submit</button>
         we can use this as props.children
      </Display> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      {/* <Message></Message> */}
      {/* <ParentComponent></ParentComponent> */}
     {/* <ConditionalRendering></ConditionalRendering> */}
     {/* <Namelist></Namelist> */}
{/* <Style_sheet></Style_sheet>
   <Form></Form> */}
   {/* <Lifecycle/> */}
   <LifecycleUA></LifecycleUA>
    </div>

  );
}

export default App;
