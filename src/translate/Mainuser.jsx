import React, { useContext } from 'react'
import Maincontext from './Maincontext';

const Mainuser = () => {
    const {language,toggleLanguage}=useContext(Maincontext)
    const translations = {
        en: "Write",
        ml: "എഴുതുക"
    };
  return (
    <div>
    <h1>
        {translations[language]} 
    </h1>
    <button onClick={toggleLanguage}>Translate</button>
</div>
  )
}

export default Mainuser