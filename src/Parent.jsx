import React from 'react'
import { Child } from './Child'
import img from './im.png'

const Parent = () => {
  return (
    <div>
        <Child name={"apple"} img={img}/>
        <Child name={"mango"}/>
        <Child name={"kivi"}/>
    </div>
  )
}

export default Parent