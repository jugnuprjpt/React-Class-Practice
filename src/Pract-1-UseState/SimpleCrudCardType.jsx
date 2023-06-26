import React, { useState } from 'react'

const menData=[
    {
        id:1,
        name:"jugnu",
        price:30
    },
    {
        id:2,
        name:"Mitesh-charcut",
        price:30
    }
]

const SimpleCrudCardType = () => {
    const [data,sentData] = useState([]);

    const addData=(get)=>{
        sentData((prev)=>[...prev,get])
    }

    
    const handleDelete=(id)=>{
        const deleteData = data.filter((item)=>item !== id)
         sentData(deleteData)
    }

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
                {
                    menData.map((itm)=>(
                        <div key={itm.id}>
                          <p>{itm.name}</p>
                          <p>{itm.price}</p>
                          <button onClick={()=>addData(itm)}>Add</button>
                        </div>
                    ))
                } 

            </div>
        </div>
      </div>
      {
      data.map((abc,i)=>(
        <div key={i}>
        <p>{abc.name}</p>
        <button onClick={()=>handleDelete(abc)}>Delete</button>
        </div>
      ))
      }
    </>
  )
}

export default SimpleCrudCardType