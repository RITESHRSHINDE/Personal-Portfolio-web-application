import React from 'react'
import p1 from "../projects/project-1.webp"
import Navbar from './Navbar'
import index from "../Tictactoe/Tic"

function Project(props) {
  return (
    <>
    
    <div>
     
       <div className="flex-wrap sm:flex w-90% sm:w-60px m-5 text-shrink-0  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-300px rounded-2xl "> 
          <div className="text-white  flex justify-between">
            <img src={props.p} className='sm:items-start w-90 sm:w-60 h-60 w-fit rounded-2xl  flex-wrap ' />
        
          <div className="text-white text-start items-center justify-center lg:w-1.5/2">
            <h1 className='text-2xl text-start p-5 pb-3 gap-6' >{props.project }<i className='text-black text-xl'>{props.languages} </i></h1>
            <p className='p-5 pt-3 pb-3' >{props.discription} </p>
            

           </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Project
