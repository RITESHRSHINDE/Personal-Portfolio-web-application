import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaCss3, FaHtml5, FaJar, FaJava, FaJs, FaNodeJs, FaPython,  } from 'react-icons/fa6'


function Technologies() {
  return (
    <div className='pb-10'>
      <h1 className=' my-20 text-white text-5xl text-center justify-center  hover:shadow-white hover:shadow-xl'>Technologies</h1>
      <div className="flex flex-wrap items-center gap-4 justify-center">
       <div className=' p-4'>
        <RiReactjsLine className=' bg-transparent rounded-2xl text-7xl text-cyan-400 hover:shadow-white hover:shadow-xl '/> 
       </div>
       <div className='p-4'>
        <TbBrandNextjs className='text-7xl rounded-full text-green-100 hover:shadow-white hover:shadow-xl' />
       </div>
       {/* <div className='p-4'>
        <SiMongodb className='text-7xl text-green-300' />
       </div> */}
        <div className='p-4'>
        <FaNodeJs className='text-7xl rounded-full text-green-600 hover:shadow-white hover:shadow-xl' />
       </div> 
       <div className='p-4'>
        <FaHtml5 className='text-7xl text-orange-600 hover:shadow-white hover:shadow-xl' />
       </div>
        <div className='p-4'>
        <FaCss3 className='text-7xl text-sky-600 hover:shadow-white hover:shadow-xl' />
       </div>
        <div className='p-4'>
        <FaJs className='text-7xl text-yellow-600 hover:shadow-white hover:shadow-xl' />
       </div>
        <div className='p-4'>
        <FaJava className='text-7xl text-red-400 hover:shadow-white hover:shadow-xl' />
       </div>
        <div className='p-4'>
        <FaPython className='text-7xl text-yellow-400 hover:shadow-white hover:shadow-xl' />
       </div>
      

      </div>
    </div>
  )
}

export default Technologies
