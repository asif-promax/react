import React, { useState } from 'react'
import Theamcontext from './Contextcreater'

const Contextprovider = ({children}) => {
    const [theam,setTheam]=useState("light")

    let toggletheam=()=>{
        setTheam(theam==='light'?"dark":"light")
    }
  return (
    <div>
        <Theamcontext.Provider value={{theam,toggletheam}}>{children}</Theamcontext.Provider>
    </div>
  )
}

export default Contextprovider