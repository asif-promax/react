import React from 'react'

const Todo = () => {
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
                <h3>{item.name}</h3>
                <h3>{item.age}</h3>
            </div>
        )
    )}
    </div>
  )
}

export default Todo