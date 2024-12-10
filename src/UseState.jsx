import React, { useEffect, useState } from 'react'

export const UseState = () => {
const[count,setCount]=useState(0)

let increment=()=>{
    setCount(count+1);
}


let decrement=()=>{
    setCount(count-1)
}
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment} className='bg-slate-400'>increment</button>
        <button onClick={decrement} className='bg-neutral-500'>derement</button>
    </div>
  )
}

// const[count,setCount]=useState(0)
// const [count1,setCount1]=useState(0)
// let increment =()=>{
//     setCount(count+1)
// }
// let decrement =()=>{
//     setCount(count-1)
// }
// useEffect(()=>{
//     console.log("working")
// })

// return(
//     <div >
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)} className=' bg-slate-700 border-2'>increment</button>
//         <button onClick={()=>setCount1(count1-1)} className='bg-slate-700 border-2'>decrement</button>
//     </div>
// )
// }
