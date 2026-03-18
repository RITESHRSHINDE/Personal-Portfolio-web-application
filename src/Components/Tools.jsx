import React from 'react'
import { FaChrome } from 'react-icons/fa6'
import { VscVscode } from "react-icons/vsc";


function Tools() {
  return (
    <div className=' bg-slate-100 h-96 items-center justify-center'>
          <h1 className='  text-black text-5xl text-center justify-center  hover:text-red-600 shadow'>Tools </h1>
     <div className="flex flex-wrap mt-20 pt-8 items-center gap-4  justify-center">
             <div className='p-4  text-slate-900'>
        <VscVscode className='text-7xl text-blue-500 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl ' />
        VsCode
       </div>
        <div className='p-4  text-slate-900'>
        <FaChrome className='text-7xl rounded-full text-red-500 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
        Chrome
        </div>
    
          </div>
        </div>
      )
    }
  
export default Tools
