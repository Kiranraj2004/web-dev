import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
const Users = () => {
   const [searcgparams,setsearchparams] =useSearchParams();
   const showactiveusers=searcgparams.get('filter')==='active'
  return (
    <div>
        <h2> user 1</h2>
        <h2> user 3</h2>
        <h2> user 2</h2>
        <Outlet></Outlet>
        <button onClick={()=>{
            setsearchparams({filter:'active'})
        }}> active users</button>
        <button onClick={()=>{
            setsearchparams({})
        }}> reaet users</button>

      showactiveusers?<h2> showing the data</h2>?<h2>data id not avalabilt</h2>
    </div>
  )
}

export default Users
