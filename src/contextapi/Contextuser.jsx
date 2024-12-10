import React, { useContext } from 'react'
import Theamcontext from './Contextcreater'
import './Context.css'

const Contextuser = () => {
    const value=useContext(Theamcontext)
  return (
    <div>
        <h1 className={value.theam=="light"?"dark":"light"}>CONTEXT API</h1>
        <button onClick={value.toggletheam}>click</button>
    </div>
  )
}

export default Contextuser