import Logo from "../assets/RS.png" 
import { FaGithub, FaInstagram, FaLinkedin, FaMoon,  FaSun,  FaTwitter } from 'react-icons/fa6'
import About from "./About"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
function Navdarr() {
 
   
  return (
  



   <div id="navbar" className="fixed top-0   h-20 w-full  bg-white items-center border  flex    ">
     <div className=' flex item-center h-20 '>
      <div className="flex-wrap flex-shrink-0 items-center sm:flex justify-end">
        
        <div  className="mx-1 flex text-center items-center justify-center border-2 m-4 p-2 ml-8 mr-8 rounded-2xl text-black border-b-slate-400 " >
         <h1> <strong> Ritesh`s Porfolio</strong></h1>
        </div>
      </div>
      <div className=" flex gap-1 text-sm lg:text-lg lg:gap-2 p-0 m-4 bg-linear-65 from-purple-500 to-pink-500 items-center text-white  ">
        <Link to="/" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border border rounded-xl  bg-gray-200 text-black "> Home</Link>
        <Link to="/About" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border rounded-xl  bg-gray-200 text-black"> MIni Projects</Link>
        <Link to="/Contact" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border rounded-xl  bg-gray-200 text-black"> Contect</Link>
        <Link to="/Projects" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border rounded-xl  bg-gray-200 text-black"> Project</Link>
        <Link to="/Resume" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border rounded-xl  bg-gray-200 text-black"> Resume</Link>
        
      </div>
       </div>
       <div className=" flex item-right h-20 w-fit text-end justify-end"> </div>
      <div className="m-2  sm:m-0 flex items-center text-end justify-end gap-5 text-sm sm:text-xl   lg:order-2 sm:gap-4 justify-end ">
        
        <a href="https://www.linkedin.com/in/ritesh-shinde-b37a98307/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_midium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaLinkedin className="hover:text-red-600 text-black " /></a>     
         <Link to="/Github" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaGithub className="hover:text-red-600 text-black hover:shadow-xl/30 hover:shadow-white rounded-full " /></Link>     
         <a href="https://www.instagram.com/rite__shinde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaInstagram className="hover:text-red-600 text-black rounded-lg bg-linear-65 from-purple-500 to-pink-500 "  /></a>        
         <a href="https://www.instagram.com/rite__shinde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaTwitter className="hover:text-red-600 text-black"  /></a>       
         {/* <button id="but" className="button bg-slate-500 rounded-xl border text-black border-gray-950 text-sm p-2 hover:bg-orange-600 "
    
  > <FaSun />MODE</button> */}
         
     

        </div>
      
   

   </div>
  )
}

export default Navdarr
