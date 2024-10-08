import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const navlinkstyle=({isActive})=>{
        return {
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline',
            
        }
    }
  return (
    <nav>
{/*  we can use the navlink tag because it will tell if the browser is at present link */}

{/*  adding the syling property to that active class of navlink */}

        <NavLink  style={navlinkstyle}
        to='/'> home</NavLink>
        <NavLink style={navlinkstyle} to='about'> about</NavLink>
    </nav>
  )
}

export default Navbar
