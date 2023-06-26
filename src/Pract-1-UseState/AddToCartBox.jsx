import React, { useState } from "react";

const cardData = [
    {
      id: 1,
      product: "kurta",
      price: 100,
    },
    {
      id: 2,
      product: "table",
      price: 100,
    },
  ];
function AddToCartBox() {
    const [addCard,setAddCard] = useState([]);

    const handleAdd=(data)=>{
        console.log(data)
        setAddCard((prev) => [...prev, data]);
    }
    

  return (
 <>

      <div style={{ display: "flex" }}>
        <div>
          {cardData.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.product}</h1>
              <p>{item.price}</p>
              <button onClick={(e)=>handleAdd(item)}>Add to Cart</button>
            </div>
          )})}
        </div>
      </div>

    <div>
    {addCard.map((iteam) => {
    return (
            <div key={iteam.id}>
              <h1>{iteam.product}</h1>
              <p>{iteam.price}</p>
            </div>
          ) })}
       </div>
      </>
  );
}

export default AddToCartBox;
