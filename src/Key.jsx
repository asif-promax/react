import React, { useState } from 'react'

const Key = () => {


    const product=[{ id:1,nmae:"laptop" ,qty:1},
        {id:2,nmae:"laptop" ,qty:1},
        {id:3,nmae:"laptop" ,qty:1}

    ]

    const [data,setData]=useState(product)
    const increment=(id)=>{
        const ids=data.map((items)=>
            items.id===id ? {...items,qty:items.qty+1}:items
        )
        setData(ids)
    }
  return (
    <div>
        {data.map((item)=>(
            <div key={item.id}>
                <h2>{item.nmae}</h2>
                <h2>{item.qty}</h2>
                <button onClick={()=>increment(item.id)}>increment</button>
            </div>
        ))}
    </div>
  )
}

export default Key