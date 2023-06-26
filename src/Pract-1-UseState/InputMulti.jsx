import React, { useState } from 'react'

const InputMulti = () => {
    const [data,setData] = useState("");
    const [store,setStore] = useState([])

    const getData=(e)=>{
        setData(e.target.value)
    
    }

    const handleAdd = () =>{
        setStore((prev)=>[...prev,data])
        // console.log(first)

    }

    const handleDelete=(id) =>{
         const op = store.filter((itm)=>itm !== id)
         setStore(op)
    }
  return (
    <>
  <div className="conatiner">
    <div className="row">
        <div className="col">

          <input type="text" value={data} onChange={getData}/>
          <button onClick={handleAdd}>Add</button>
        </div>
    </div>
  </div>
  {
    store.map((itm)=>(
        <>
        <p>{itm}</p>
        <button onClick={()=>handleDelete(itm)}>Delete</button>
        </>
    ))
  }
    </>
  )
}

export default InputMulti