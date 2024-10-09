import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import NavigatePrograminly from "./component/NavigatePrograminly";
import NoMatch from "./component/NoMatch";
import Products from "./component/Nested routes/Products";
import Feature from "./component/Nested routes/Feature";
import New from "./component/Nested routes/New";
import Users from "./component/Users";
import Userdetails from "./component/Userdetails";
import Admin from "./component/Admin";
function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="ordersummary" element={<NavigatePrograminly></NavigatePrograminly>}></Route>
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
      {/*  inn react the (*) asrtics means  if any og the route not matches then this will be render  */}
      <Route path="products" element={<Products></Products>}>

      <Route path="feature" element={<Feature></Feature>}></Route>
      <Route path="new" element={<New></New>}></Route>
      </Route>
      <Route path="user" element={<Users></Users>}></Route>
      <Route path="user/:userId" element={<Userdetails></Userdetails>}></Route>
      {/*  this will create the dymanic routing every time it will check the id if any matchs */}
      <Route path="user/admin" element={<Admin></Admin>}></Route>
      {/*  it first check the absoult link after this will checks whetehr the conetnt is avialable and else render the dynamic routing     */}


      
    </Routes>
    </>
   
    
  );
}

export default App;
