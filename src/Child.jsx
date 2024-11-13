import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <img src={props.img}></img>
    </div>
  )
}
