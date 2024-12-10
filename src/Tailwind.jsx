import React from 'react'
import img from'./im.png'

const Tailwind = () => {
  return (
    <div>
      <div className='ist'>
        <div className='nav flex justify-around p-6'>
          <div className=''>
            <p className=''>START SIMPLE</p>
          </div>
          <div className=' flex gap-5 text-xs '>
            <a href="">HOME</a>
            <a href="">WORK</a>
            <a href="">CONTACT</a>
          </div>
        </div>
      </div>
      <div className='sct pl-52  h-auto bg-slate-600 pt-40 '>
        <div className='text-4xl p-4'>STARTUP LANDING PAGE <br />FOR YOUR PRODUCT <br />SERVICE</div>
        <div className='text-base p-4'>perfect landing page to showcase your product</div>
        <div className='text-xs p-3'>try for free</div>
        <input type="text" className='mb-3 mr-2' />
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-1 text-center me-2 mb-2">Blue</button>
      </div>
      <div className='third'>
        <div>
          OUR SUCCESS STORIES
        </div>
        <div className=' gap-3 h-80 flex justify-center items-center'>
          <img src={img} alt="" className='h-52 w-52' />
          <img src={img} alt="" className='h-52 w-52'/>
          <img src={img} alt="" className='h-52 w-52'/>
        </div>
      </div>
    </div>
  )
}

export default Tailwind