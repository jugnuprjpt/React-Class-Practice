import { useState } from "react"

export default function CrudInput () {
    const [data,setData] = useState("");
    const [table,setTable] =useState(["ajay"])

    const getData=(e)=>{
        setData(e.target.value)
    }

    const handleAdd=()=>{
        setTable((prev)=>[...prev,data])
        setData("")
    }

    const handelDelete = (id)=>{
        setTable(table.filter((itm)=>itm !== id))   
    }

    return (
        <>
        <h1>Crud</h1>
        <input type="text" value={data} onChange={getData}/>
        <button onClick={handleAdd}>Add</button>
        {
            table.map((product)=>(
                <>
                <p>{product}</p>
                <input type="checkbox" />
                <button onClick={()=>handelDelete(product)}>delete</button>
                </>
            )) 
        }
     
        </>
    )
}