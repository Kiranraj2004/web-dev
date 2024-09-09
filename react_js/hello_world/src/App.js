 import logo from './logo.svg';
import './App.css';
import Hello from './jsx';
import Greet from './components/functional_components';
// import Greet from './components/functional_components';
// import welcome from './components/class_components';
//  Greet   can be name has any think if we use default export 
// we can inport the component greet like this 
// import {Greet1} from './components/functional_components'

function App() {
  return (
    <div className="App">
      ndjsjdj
      <Hello></Hello>
      <Hello />
      <header className="App-header">
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
      </header> 
      <Greet/>
       <Greet />
      <Greet></Greet>
    </div>
  );
}

export default App;
