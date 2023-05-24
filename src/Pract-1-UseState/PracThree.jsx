import React, { useState } from 'react'

const PracThree = () => {
    const [count,setCount] = useState(5)
     const handleAdd=(data)=>{
        setCount((pre)=> pre + data)
     }
  return (
    <>
       <div>
        <p>count:- {count}</p>
        <button onClick={()=>handleAdd(5)} >click me</button>
       </div>
    </>
  )
}

export default PracThree