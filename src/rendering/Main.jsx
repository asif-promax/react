import React from 'react'
import { Logged } from './Logged'
import Notlogged from './Notlogged'

export const Main = () => {
    const islogged= false
  return (
    <div>
        {islogged? <Logged></Logged>:<Notlogged></Notlogged>}
    </div>
  )
}
