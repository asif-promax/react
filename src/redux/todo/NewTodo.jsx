import React, { useState } from 'react'

const NewTodo = () => {
    const [text,setText]=useState("")
    // const[display,setDisplay]=useState('')
    const[store,setStore]=useState([])
    const[edit,setEdit]=useState(null)

    // const handleChange=(event)=>{
    //     setText(event.target.value)
    // }

    // const buttonClick=(event)=>{
    //     event.preventDefault()
    //     setDisplay(text)
    // }
    // console.log()
    const storeData=(event)=>{
        event.preventDefault();
       if(text.trim()){
        if(edit!==null){
            const updStore=store.map((item,index)=>{
                index===edit?text:item
            })
            setStore(updStore)
            setEdit(null)
        }else{
        setStore([...store,text]);
        }
        setText('');

       }
    }
    const delButton=(index)=>{
        const updItem=store.filter((_,i)=>i!==index);
        setStore(updItem)
    }
    const updButton=(item)=>{
        setText(item)
    }

  return (
    <div>
        <form action=""onSubmit={storeData} >
            <input type="text" value={text} className='shadow-md' onChange={(event)=>setText(event.target.value)}/>
            <button type='submit'  className='rounded-md bg-slate-500 px-2'>click</button>
            
        </form>
        {store.map((item,index)=>
            <div key={index}>
                <h3>{item}
                    <button onClick={()=>delButton(index)} className='bg-slate-300 px-3 py-1 rounded-md m-2'>delete</button>
                    <button onClick={()=>updButton(item)} className='bg-slate-300 px-3 py-1 rounded-md m-2'>update</button>
                </h3>
            </div>
        )}
    </div>
  )
}

export default NewTodo