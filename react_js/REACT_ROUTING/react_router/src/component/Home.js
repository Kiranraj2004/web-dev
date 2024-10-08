import React, { useRef } from 'react';
import { replace, useNavigate } from 'react-router-dom';
function Home() {
  const myRef = useRef(null);  // Make sure the ref is initialized like this
   const navigate=useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      {/*  the second argument of the naviagte hooks is it will go back to the home page og google */}
      <button onClick={()=>navigate('ordersummary',{replace:true})}> place order</button>
      {/* Your component code */}
    </div>
  );
}

export default Home;
