import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import NavigatePrograminly from "./component/NavigatePrograminly";
function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="ordersummary" element={<NavigatePrograminly></NavigatePrograminly>}></Route>
    </Routes>
    </>
   
    
  );
}

export default App;
