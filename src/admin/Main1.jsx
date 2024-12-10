import React from 'react'
import Adimin from './Adimin'
import User from './User'


const Main1 = () => {
    const bpress=false
  return (
    <div>
        {bpress?<Adimin></Adimin>:<User></User>}
    </div>
  )
}

export default Main1