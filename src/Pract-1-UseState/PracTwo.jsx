import React, { useState } from 'react'

 // ---- Remain ----

function PracTwo() {
    const [data,setData] = useState()
    // const addData = () =>{
    //     setData(alert("ddfdsf"))
    // }

    const submit=(e)=>{
      e.prevenetDefault();
      setData((prev)=>([...prev,note]))

    }
  return (
    <div>
       <form onClick={submit}>
       <input type="text" value={data}/>
       <button >add</button>
       </form>
    </div>
  )
}

export default PracTwo