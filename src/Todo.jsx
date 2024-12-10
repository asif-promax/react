import React from 'react'

export const todo = () => {
    const person=[
        {name:"athul" ,age:26},
        {name:"athu" ,age:22},
        {name:"hulam" ,age:36},
        {name:"lamin" ,age:29}
    ]
  return (
    <div>
        {person.map((item)=>(
            <div>
                <h3>{item.person}</h3>
                <h3>{item.age}</h3>
            </div>
        )
    )}
    </div>
  )
}

export default todo