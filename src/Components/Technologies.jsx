import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaCss3, FaHtml5, FaJar, FaJava, FaJs, FaNodeJs, FaPython,  } from 'react-icons/fa6'
import './hero.css'


function Technologies() {
  return (
    <div className=' pb-10 bg-slate-100 h-full'>
      <h1 className=' my-20 text-black text-5xl text-center justify-center  hover:text-red-600 shadow'>Technologies</h1>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        
       <div className="p-4   text-slate-900">
        <RiReactjsLine className=' bg-transparent rounded-2xl text-7xl text-cyan-400 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl '/> 
       React.Js 
       </div>
       <div className='p-4 text-slate-900'>
        <TbBrandNextjs className='text-7xl rounded-full text-green-600 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       Next.Js
       </div>
       {/* <div className='p-4 text-slate-900'>
        <SiMongodb className='text-7xl text-green-300' />
       </div> */}
        <div className='p-4 text-slate-900'>
        <FaNodeJs className='text-7xl rounded-xl text-green-600 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       Node.Js
       </div> 
       <div className='p-4 text-slate-900'>
        <FaHtml5 className='text-7xl text-orange-600 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       HTML
       </div>
        <div className='p-4 text-slate-900'>
        <FaCss3 className='text-7xl text-sky-600 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       CSS
       </div>
        <div className='p-4 text-slate-900'>
        <FaJs className='text-7xl text-yellow-600 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       JavaScript
       </div>
        <div className='p-4 text-slate-900'>
        <FaJava className='text-7xl text-red-400 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       JAVA
       </div>
        <div className='p-4 text-slate-900'>
        <FaPython className='text-7xl text-yellow-400 hover:shadow-slate-900 hover:bg-slate-800 hover:shadow-xl' />
       Python
       </div>
      

      </div>
    </div>
  )
}

export default Technologies
