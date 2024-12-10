import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Cartslice';

const Cart = () => {
    const items = useSelector((state)=>state.cart.items)
    const dispatch=useDispatch();
  return (
    <div>
        <h1>cart</h1>
        {items.length===0?(<p>Cart is empty</p>):(
            items.map((item)=>(
                <div key={item.id}>
                    <img src={item.img} alt="" />
                    <h3>{item.phone}</h3>
                    <p>price:${item.price}</p>
                    <p>qty:{item.quantity}</p>
                    <button onClick={()=>dispatch(increment(item.id))}>+</button>
                    <button onClick={()=>dispatch(decrement(item.id))}>-</button>
                </div>
            ))
        )}
    </div>
  )
}

export default Cart