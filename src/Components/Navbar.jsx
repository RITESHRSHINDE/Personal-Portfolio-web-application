import Logo from "../assets/RS.png" 
import { FaGithub, FaInstagram, FaLinkedin, FaMoon,  FaSun,  FaTwitter } from 'react-icons/fa6'
import About from "./About"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
function Navdarr() {
 
   
  return (
  



   <div id="navbar" className=" sticky  pr-0 h-20 w-full  bg-red-500 items-center justify-center  sm:flex-grid ">
     <div className='flex item-center h-20 '>
      <div className="flex-wrap flex-shrink-0 items-center sm:flex">
        
        <img src={Logo} className="mx-1 flex text-center items-center justify-center  hover:border hover:border-orange-600" width={50} height={40} alt="Logo"/>
      </div>
      <div className=" flex gap-1 text-sm lg:text-lg lg:gap-2 p-0 m-4 bg-linear-65 from-purple-500 to-pink-500 items-center text-white  ">
        <Link to="/" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border border-black rounded-xl  hover:bg-slate-300 hover:text-black "> Home</Link>
        <Link to="/About" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border border-black rounded-xl hover:bg-slate-300 hover:text-black"> MIni Projects</Link>
        <Link to="/Contact" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border border-black rounded-xl hover:bg-slate-300 hover:text-black"> Contect</Link>
        <Link to="/Projects" className="p-1 text-sm lg:text-lg m-1 sm:p-2 sm:m-2 border border-black rounded-xl hover:bg-slate-300 hover:text-black"> Project</Link>
        
      </div>
      <div className="m-2 ml-10 sm:m-0 flex  text-right items-center  justify-right gap-5 text-sm sm:text-xl lg:mr-0  lg:order-2 sm:gap-4 ">
        
        <a href="https://www.linkedin.com/in/ritesh-shinde-b37a98307/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_midium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaLinkedin className="hover:text-white text-black " /></a>     
         <Link to="/Github" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaGithub className="hover:text-white text-black hover:shadow-xl/30 hover:shadow-white rounded-full " /></Link>     
         <a href="https://www.instagram.com/rite__shinde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaInstagram className="hover:text-white rounded-lg bg-linear-65 from-purple-500 to-pink-500 "  /></a>        
         <a href="https://www.instagram.com/rite__shinde/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
         < FaTwitter className="hover:text-white text-black"  /></a>       
         <button id="but" className="button bg-slate-500 rounded-xl border textblack border-gray-950 text-sm p-2 hover:bg-orange-600 "
    
  > <FaSun />MODE</button>
      </div>
      
    </div>

   </div>
  )
}

export default Navdarr
