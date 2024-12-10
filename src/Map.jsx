import React from 'react'

export const Map = () => {
    const fruits=[
        {fruit:"apple",quantity:40},
        {fruit:"mango",quantity:45},
        {fruit:"pappaya",quantity:5},
        {fruit:"banana",quantity:15}
    ]
  return (
    <div>
        {fruits.map((item)=>(
            <div>
                <h3>{item.fruit}</h3>
                <h3>{item.quantity}</h3>
            </div>
        ))}
    </div>
  )
}
