import React from 'react'
import img from './im.png'

const Work = () => {
  return (
    <div>
      <div className='flex justify-around items-center bg-slate-500'>
        <div className='w-4/12'>
          <div className='text-4xl my-4'>Really catchy headline here</div>
          <div className='text-sm my-4'>print each property (name, position, salary) in the employee object. Add a new property department to the employee object</div>
          <div className='my-4 flex gap-4'>
          <a href="#" className='border-2 border-solid border-slate-950 px-5 py-1 hover:bg-white hover:text-blue-800 hover:border-white'>GET STARTED</a>
          <a href="#" className='border-2 border-solid border-slate-950 px-5 py-1 hover:bg-white hover:text-blue-800 hover:border-white'>LEARN MORE</a>
          </div>
        </div>
        <div className='w-4/12 my-20'>
          <img src={img} alt="" />
        </div>
      </div>
      <div className='flex justify-around text-center'>
        <div className='w-2/12 my-20 '>
          <img src={img} className='w-24 h-28 m-auto' alt="" />
          <div className='font-bold my-2'>FEATURE NAME</div>
          <div className='text-sm'>an object named employee with the properties name, position, and salary. Objective: Access and print each property (name, position, salary) in the employee object. Add a new property department to the</div>
        </div>
        <div className='w-2/12 my-20 '> 
          <img src={img} className='w-24 h-28 m-auto' alt="" />
          <div className='font-bold my-2'>FEATURE NAME</div>
          <div className='text-sm'>an object named employee with the properties name, position, and salary. Objective: Access and print each property (name, position, salary) in the employee object. Add a new property department to the</div>
        </div>
        <div className='w-2/12 my-20'>
          <img src={img} className='w-24 h-28 m-auto' alt="" />
          <div className='font-bold my-2'>FEATURE NAME</div>
          <div className='text-sm'>an object named employee with the properties name, position, and salary. Objective: Access and print each property (name, position, salary) in the employee object. Add a new property department to the</div>
        </div>
      </div>
    </div>
  )
}

export default Work