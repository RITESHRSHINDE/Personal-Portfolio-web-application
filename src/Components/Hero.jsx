import React from 'react'
import profilePic from "../assets/Riteshprofile1.png"
import Technologies from './technologies'
import Projects from './Projects'
import Contact from './Contact'
// import './Hero.css'

function Hero() {
  return (
    <div className=' pb-0 ml-58  w-full h-full lg:mb-0 sm:w-full '>
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2.5">
             <div className="flex h-48 text-center justify-center border-sky-200  ">
                <img src={profilePic} alt=" profilepic" className='profile ' />
             </div>
            </div>
            <div className="w-full lg:w-1/1.5">
            <div className="flex flex-col items-center lg:items-start ">

               
                
                     <div className="flex h-96  w-full justify-center border-sky-200  ">
                {/* <img src={profilePic} alt=" profilepic" className='h-96 w-96 sm:h-96 bg-slate-900 rounded-xl object-cover  border-y-8 border-stone-700 scale-x-[1]  hover:border-orange-600 ' /> */}
             <div>
           <h2 className=" text-black  pb-2 bg-slate-200 text-5xl tracking-tighter *:lg:text-8xl">
                    Ritesh Shinde
                </h2>
               
                     <span className=' pl-8 bg-gradient-to-r from-slate-300 to-stone-700 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Full stack Web Developer</span>
                     
                    <p className=' pl-8 text-black mb-20 max-wlg py-6 text-2xl leading-relaxed tracking-tighter gap-2'>
                      I am a passionate and detail-oriented full stack web developer with hands-on experience in React.js, Node.js, and Tailwind CSS. Currently pursuing a Bachelor of Science in Computer Science (3rd year), with a strong foundation in modern web technologies and a passion for building responsive, user-friendly web applications. Eager to contribute to dynamic development teams and grow as a full-stack developer.
                    </p>
                    </div>
             </div>

                    {/* <a href="../public/Ritesh_Rajabhau_Shinde_Resume.pdf"
                    target='_blank'
                    rel='noopener noreferance'
                    download
                    className='bg-white rounded-full p-1 text-sm text-stone-600 m-5 hover:bg-green-400 hover:text-stone-900 lg:text-xl lg:m-10 lg:p-4'> 
                    Downlode Resume

                    </a> */}

                   
            </div>
            </div>
            
           </div> 
          
        </div>

       
  )
}

export default Hero
