import React, { useState } from 'react'

function IncrementDecremet() {
    const [add,setAdd] = useState(0)
    const [name,setName] = useState("arjun")
    const [param,setParam] = useState()

    // ---- Increment ----
    const handleAdd=()=>{
        setAdd(add +1)
    }
         // ---- Name Change ----
    const handleChange =()=>{
        setName("jugnu")
    }
     
     // ---- count add ----
    const handleCount = (count) =>{
        setParam(count + 5 )
    }
  return (
    <>
      <div>

      {/* // ---- Increment ---- */}

        <p>Count : - {add}</p>
        <button onClick={handleAdd}>add</button>

        {/* // ---- Name Change ---- */}

        <p>{name}</p>
        <button onClick={handleChange}>change</button>
      
        {/* // ---- count add ---- */}
        <p>{param}</p>
        <button onClick={()=>handleCount(5)}>count</button>
      </div>
    </>
  )
}

export default IncrementDecremet