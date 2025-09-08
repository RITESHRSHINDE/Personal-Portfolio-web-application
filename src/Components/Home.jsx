import React, { useState } from 'react'
import Technologies from './technologies'
import Navbar from './Navbar'
import Hero from './Hero'
import Tools from './Tools'



function Home() {

  
  return (
   <div   className='h-full w-fit'>
     <div>
      <div className=" h-full mb-0 m-0 pr-0 pl-0 ml-0 w-fit bg-slate-800 sm:relativ">
    <div className="absolute mb-0 mr-0 ml-0  left-[0%] right-0 top-[0%] h-[500px] w-[393px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(200,125,255,0))]">
      </div>
      <div className="absolute right-[0%] left-[0%] top-[0%] h-[500px] w-[393px] rounded-full bg-[radial-gradient(Circle_farthest-side,rgba(125,125,100,.1),rgba(190,200,200,0))]">
        </div>
        <Navbar />
        <Hero />
        <Technologies />
        <Tools />




       
    </div>
 
    </div>
   </div>
  )
}

export default Home
