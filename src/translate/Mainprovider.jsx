import React, { useState } from 'react'
import Maincontext from './Maincontext';

const Mainprovider = ({children}) => {
    const [language,setLanguage]=useState("en");
    let toggleLanguage=()=>{
        setLanguage(language==="en"?"ml":"en")
    }
  return (
    <Maincontext.Provider value={{language,toggleLanguage}}>{children}</Maincontext.Provider>
  )
}

export default Mainprovider