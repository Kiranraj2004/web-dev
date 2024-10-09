import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
        <input type='search' placeholder='Search products'></input>
    </div>
    <nav>
        <NavLink to='feature'> feature</NavLink>
        <NavLink to='new'> Newproducts</NavLink>
        {/*  heer we are using the relative link which will redener the component int he parent element
         but if you use the absolute link using the / in front then it willl render the elements in the locoal / . and 
         it will return page not render if you want to work wiht the absoult link then use protect/ne  */}
    </nav>
    <Outlet></Outlet>
    {/*  outlet is the react element which allow us to render the children component int he same page but the address of the link is different  */}
        
    </>
    
  )
}

export default Products
