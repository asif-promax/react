import React, { useState } from 'react'
import { UseState } from './UseState';
import axios from 'axios'

export const Fetch = () => {
  const [data,setData]=useState([]);
  const fetchdate=async()=>{
    const response1=await axios.get("https://jsonplaceholder.typicode.com/todos")
    setData(response1.data);
  };
  console.log(data)
  return (
    <div>
      <button onClick={fetchdate} className='bg-slate-700'>click</button>
      <div>
        {data.map((user)=>(
          <div>
            <li>{user.title}</li>
            <li>{user.userId}</li>
          </div>
        ))}

      </div>
    </div>
  );
};
