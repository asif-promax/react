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
    <div> <div className="container">
    <div className="calculator">
      <form action="">
        <div className='bg-slate-300'>
          <input type= "text" value={value}/>
          </div>
        <div className=''>
          <button type="button" value="AC" onClick={e => setValue('')}>AC</button>
          <button type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}>DE</button>
          <button type="button" value="." onClick={e => setValue(value + e.target.value)}>.</button>
          <button type="button" value="/" onClick={e => setValue(value + e.target.value)}>/</button>
        </div>
        <div>
          <button type="button" value="7" onClick={e => setValue(value + e.target.value)}>7</button>
          <button type="button" value="8" onClick={e => setValue(value + e.target.value)}>8</button>
          <button type="button" value="9" onClick={e => setValue(value + e.target.value)}>9</button>
          <button type="button" value="*" onClick={e => setValue(value + e.target.value)}>X</button>
        </div>
        <div>
          <button type="button" value="4" onClick={e => setValue(value + e.target.value)}>4</button> 
          <button  type="button" value="5" onClick={e => setValue(value + e.target.value)}>5</button>
          <button type="button" value="6" onClick={e => setValue(value + e.target.value)}>6</button>
          <button type="button" value="+" onClick={e => setValue(value + e.target.value)}>+</button>
        </div>
        <div>
          <button type="button" value="1" onClick={e => setValue(value + e.target.value)}>1</button> 
          <button type="button" value="2" onClick={e => setValue(value + e.target.value)}>2</button> 
          <button type="button" value="3" onClick={e => setValue(value + e.target.value)}>3</button> 
          <button type="button" value="-" onClick={e => setValue(value + e.target.value)}>-</button>
        </div>
        <div>
          <button type="button" value="00" onClick={e => setValue(value + e.target.value)}></button>
          <button  type="button" value="0" onClick={e => setValue(value + e.target.value)}>0</button>
          <button type="button" value="=" onClick={e => setValue(eval(value))}>=</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Calculator