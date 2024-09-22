import React ,{useState}from 'react'

function HooksCounterThree() {
    const [name,setName]=useState({firstname:'',lastename:''})
  return (
    <div>
    <form>
        <input type='text' value={name.firstname} 
        onChange={e=>setName({...name,firstname:e.target.value})}></input>
         <input type='text' value={name.lastename} 
        onChange={e=>setName({...name,lastename:e.target.value})}></input>
        your first name is {name.firstname} lastname-{name.lastename}
        {JSON.stringify(name)}
    </form>

      
    </div>
  )
}

export default HooksCounterThree
