// import React, { useState } from 'react'

// const Calculator = () => {
//     const [data,setData]=useState('')

//   return (
//     <div>
//         <table>
//             <tr>
//                 <td>
//                     <input type="text"  />
//                 </td>
//             </tr>
//             <tr>
//                 <td><button onClick={setData('')}>AC</button></td>
//                 <td><button>C</button></td>
//                 <td><button>%</button></td>
//                 <td><button>/</button></td>
//             </tr>
//             <tr>
//                 <td><button onClick={}>7</button></td>
//                 <td><button>8</button></td>
//                 <td><button>9</button></td>
//                 <td><button>X</button></td>
//             </tr>
//             <tr>
//                 <td><button>4</button></td>
//                 <td><button>5</button></td>
//                 <td><button>6</button></td>
//                 <td><button>-</button></td>
//             </tr>
//             <tr>
//                 <td><button>1</button></td>
//                 <td><button>2</button></td>
//                 <td><button>3</button></td>
//                 <td><button>+</button></td>
//             </tr>
//             <tr>
//                 <td><button>0</button></td>
//                 <td><button>.</button></td>
//                 <td><button>=</button></td>
//             </tr>
//         </table>
//     </div>
//   )
// }

// export default Calculator


import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState('');
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className='bg-slate-500 p-3'>
        <div className='bg-slate-300 box-border'>
          <input type= "text" className='p-2  border focus:shadow-sm focus:border-none bg-transparent w-full ' value={value}/>
          </div>
        <div className='text-white space-x-2 space-y-2'>
          <button className='w-12 h-12 bg-slate-800 rounded-md ' type="button" value="AC" onClick={e => setValue('')}>AC</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="DE" onClick={e => setValue(value.slice(0, -1))}>DE</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="." onClick={e => setValue(value + e.target.value)}>.</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="/" onClick={e => setValue(value + e.target.value)}>/</button>
        </div>
        <div className='text-white space-x-2 space-y-2'>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="7" onClick={e => setValue(value + e.target.value)}>7</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="8" onClick={e => setValue(value + e.target.value)}>8</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="9" onClick={e => setValue(value + e.target.value)}>9</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="*" onClick={e => setValue(value + e.target.value)}>X</button>
        </div>
        <div className='text-white space-x-2 space-y-2'>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="4" onClick={e => setValue(value + e.target.value)}>4</button> 
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="5" onClick={e => setValue(value + e.target.value)}>5</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="6" onClick={e => setValue(value + e.target.value)}>6</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="+" onClick={e => setValue(value + e.target.value)}>+</button>
        </div>
        <div className='text-white space-x-2 space-y-2'>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="1" onClick={e => setValue(value + e.target.value)}>1</button> 
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="2" onClick={e => setValue(value + e.target.value)}>2</button> 
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="3" onClick={e => setValue(value + e.target.value)}>3</button> 
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="-" onClick={e => setValue(value + e.target.value)}>-</button>
        </div>
        <div className='text-white space-x-2 space-y-2 flex items-center justify-center'>
          <button type="button" className='w-12 h-12 mt-2 bg-slate-800 rounded-md ' value="0" onClick={e => setValue(value + e.target.value)}>0</button>
          <button type="button" className='w-12 h-12 bg-slate-800 rounded-md ' value="=" onClick={e => setValue(eval(value))}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator