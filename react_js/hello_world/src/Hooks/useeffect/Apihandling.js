import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Apihandling() {
    const [data,setdata]=useState({});
    const [id,setId]=useState(1);
    const [buttonclicked,setbuttonclicked]=useState(1);
    const getdata=()=>{
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setdata(res.data);
        })
        .catch((mag)=>{
            console.log(mag)
        })

    },[buttonclicked])

  return (
    <div>
        <input value={id} onChange={e=>setId(e.target.value)}></input>
        <button  onClick={()=>{setbuttonclicked(id)}}> on click</button>
        {/* {data.map((d)=>[
            <div>
                <li key={d.id}>{d.title}</li>
            </div>
        ])} */}
        <div>
        {data.title}
        </div>
       
      
    </div>
  )
}

export default Apihandling
