import React from 'react'
import kkart from "../assets/kkart.jpg"

function Logo() {
  return (
    <div className='flex  items-center'>
        <h1 className='text-2xl font-bold'>Kkart</h1>
      <img src={kkart} alt=""  className='w-24 h-24 rounded-full'/>
    </div>
  )
}

export default Logo
