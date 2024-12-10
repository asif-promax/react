import React from 'react'
import img from './im.png'
import img1 from './pexels-pixabay-209831.jpg'
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './Cartslice';
import { Link } from 'react-router-dom';

const items=[
    {id:1, phone:"Redmi-10",made:"China" , price:"15000" ,img:img},
    {id:2, phone:"samsung-M32",made:"India" , price:"17000" ,img:img1},
    {id:3, phone:"iphone-14pro",made:"india" , price:"115000" ,img:img}
];

const Addcart = () => {
    const item=useSelector((state)=>state.cart.items)
   const dispatch=useDispatch();
   console.log(item);   
   


  return (
    <div className='min-h-screen bg-slate-400'>
        <div className='flex'>
                <Link to="/Cart"><div className='m-auto'><FaCartArrowDown size={50}/></div></Link>
            </div>
            <div className='flex'>

                {items.map((item)=>(
                    <div key={item.id} className='p-6 w-4/5' >
                        <img src={item.img} alt="" className='rounded-md' />
                        <h2>{item.phone}</h2>
                        <h4>{item.made}</h4>
                        <h4>{item.price}</h4>
                        <button onClick={()=>dispatch(addItem(item))} className='bg-zinc-500 px-3 py-2 rounded-md'>Add To cart</button>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default Addcart