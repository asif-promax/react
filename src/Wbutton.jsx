// import React from 'react'

// const Wbutton = () => {
//     const handle=()=>(
//         alert("button clicked")
//     )
//   return (
//     <div>
//         <button onClick={handle}>click</button>
//     </div>
//   )
// }

// export default Wbutton


// import React from 'react'

// const Wbutton = ({label,onClick}) => {
//   return <button onClick={onClick} className='bg-slate-500'>{label}</button>;
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Counter = () => {
//     const [count,setCount]=useState(0);
//   return (
//     <div>
//         <p>{count}</p>
//         <button onClick={()=>setCount(count+1)}>increment</button>
//     </div>
//   )
// }

// export default Counter


// import React, { useState } from 'react'

// const Userprofile = () => {
//     const [user,setUser]=useState({name:"asi",age:23});
//   return (
//     <div>
//         <h1>{user.age}</h1>
//         <button onClick={()=>setUser({...user,age:user.age+1})}>increment age</button>
//     </div>
//   )
// }

// export default Userprofile


// import React, { useState } from 'react'

// const Toggle = () => {
//     const [ison,setOn]=useState(true);
//   return (
//     <div>
//         <button onClick={()=>setOn(!ison)}>{ison?"on":"off"}</button>
//     </div>
//   )
// }

// export default Toggle


// import React, { useState } from 'react'

// const Wbutton = ({initialCount}) => {
//     const [count,setCount]=useState(initialCount)
//   return (
//     <div>
//         <p>count:{count}</p>
//     </div>
//   )
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Handle = () => {
//     const [name,setName]=useState("")
//   return (
//     <div>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <p>name:{name}</p>
//     </div>
//   )
// }

// export default Handle


// import React from 'react'

// const Wbutton = () => {
//     const items=["banana","apple","orange"]
//   return (
//     <div>
//         {items.map((item,index)=>
//             <div kay={index}>
//                 <li>{item}</li>
//             </div>
//         )}
//     </div>
//   )
// }

// export default Wbutton


// import React from 'react'

// const Wbutton = ({name,age,location,image}) => {
    
//   return (
//     <div className='flex flex-row w-2/5 flex-wrap'>
//         <div>
//         <img src={image} alt="" />
//         <h3>{name}</h3>
//         <p>age:{age}</p>
//         <p>location:{location}</p>
//         </div>
//     </div>
//   );
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Wbutton = () => {
//     const [count,setCount]=useState(0);
//   return (
//     <div>
//         <h1>{count}</h1>
//         <div className=' space-x-5'>
//             <button onClick={()=>setCount(count+1)} className='border-2 rounded-md px-7 py-4 bg-slate-500'>increment</button>
//             <button onClick={()=>setCount(count-1)} className='border-2 rounded-md px-7 py-4 bg-slate-500'>decrement</button>
//         </div>
//     </div>
//   )
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Wbutton = () => {
//     const [data,setData]=useState("")
//     const [update,setUpdate]=useState("")
//     const buttonclick=()=>{
//         setUpdate(data)
//     }
//   return (
//     <div>
//         <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
//         <button onClick={buttonclick}> click</button>
//         <p>{update}</p>
//     </div>
//   )
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Wbutton = () => {
//     const[isLogin,setisLogin]=useState(false)
//   return (
//     <div>
//         <h1>{isLogin?"logidin":"logedout"}</h1>
//         <button onClick={()=>setisLogin(!isLogin)}>
//             {isLogin?"logout":"login"}
//         </button>
//     </div>
//   )
// }

// export default Wbutton


// import React from 'react'

// const Wbutton = () => {
//     const items=[
//         {id:1,name:"Rishu", about:"happy",age:20},
//         {id:2,name:"rishana", about:"sad",age:30}
//     ]
//     const endletter=items.filter(item=>item.name.endsWith("a"));
//     const startletter=endletter.filter(item1=>item1.name.startsWith("R"));
//   return (
//     <div>
//         {startletter.map(item2=>(
//             <li key={item2.id}>
//                 {item2.name}
//             </li>))}
//     </div>
//   )
// }

// export default Wbutton


// import React, { useState } from 'react'
// import Wbchiled from './Wbparant'

// const Wbutton = () => {
//     const [message,setMessage]=useState("hello from paret")

//     const handlechildmessage=(childmessage)=>{
//         alert(`message from chiled: ${childmessage}`)
//     }
//   return (
//     <div>
//         <h1>paranat component</h1>
//         <p>{message}</p>
//         <Wbchiled sendmessage={handlechildmessage}/>
//     </div>
//   )
// }

// export default 


// import React, { useEffect, useState } from 'react'

// const Wbutton = () => {
//   const [posts,setPosts]=useState([]);
//   useEffect(()=>{
//     fetch("https://www.omdbapi.com/?s=the%20departed&apikey=a5ef1268")
//       .then((response)=>response.json())
//       .then((data)=>setPosts(data.Search));
//   },[]);
//   return (
//     <div>
//       <ul>
//         {posts.slice(0,5).map((post)=>(
//           <li key={post.imdbID}>{post.Title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Wbutton


// import React, { useState } from 'react'

// const Wbutton = () => {
//   const [formData,setformData]=useState({name:"",email:"",password:""});

//   const handlechange=(e)=>{
//     const {name,value}=e.target;
//     setformData((prev)=>({...prev,[name]:value}));
//   };
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("for submitted",formData)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <ul>
//         <li>
//           <label htmlFor=""> Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handlechange} />
//         </li>
//         <li>
//           <label>Email:</label>
//           <input type="email"  className='border-2 border-zinc-950' name="email" value={formData.email} onChange={handlechange} />
//         </li>
//         <li>
//           <label>password:</label>
//           <input type="password" name='password' value={formData.password} onChange={handlechange} />
//         </li>
//       </ul>
//       <button type="submit" className='bg-slate-500 rounded-md px-5 border-2 border-slate-900'>submit</button>
//     </form>
//   )
// }

// export default Wbutton