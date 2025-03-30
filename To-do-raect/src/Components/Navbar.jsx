import React from 'react'

export default function Navabr() {
  return (
    <nav>
   <div className='flex justify-between bg-blue-400 text-white py-2'>
    <div className='logo'>
        <span className='font-bold text-xl mx-8'>iTask</span>

    </div>
   
 
   <ul className='flex gap-8 mx-8'>
    <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
    <li className='cursor-pointer hover:font-bold transition-all'>About</li>
   </ul>
   </div>
    </nav>
  )
}
