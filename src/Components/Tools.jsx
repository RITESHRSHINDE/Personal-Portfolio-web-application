import React from 'react'
import { FaChrome } from 'react-icons/fa6'
import { VscVscode } from "react-icons/vsc";


function Tools() {
  return (
    <div className='pb-24'>
          <h1 className=' my-20 text-white text-5xl text-center justify-center'>Tools</h1>
     <div className="flex flex-wrap items-center gap-4 justify-center">
             <div className='p-4'>
        <VscVscode className='text-7xl text-blue-500 hover:shadow-white hover:shadow-xl ' />
       </div>
        <div className='p-4'>
        <FaChrome className='text-7xl rounded-full text-red-500 hover:shadow-white hover:shadow-xl' />
       </div>
    
          </div>
        </div>
      )
    }
  
export default Tools
