import React from 'react'
import profilePic from "../assets/Riteshprofile1.png"
import Technologies from './technologies'
import Projects from './Projects'

function Hero() {
  return (
    <div className='pb-0 w-full lg:mb-0 sm:w-full'>
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2.5">
            <div className="flex justify-center  lg:p-8">
                <img src={profilePic} height={300} alt=" profilepic" className='h-52 sm:h-96 bg-slate-900  border-spacing-4 border-stone-700 rounded-3xl hover:border-orange-600 ' />

            </div>
            </div>
            <div className="w-full lg:w-1/1.5">
            <div className="flex flex-col items-center lg:items-start mt-10">
                <h2 className=" text-white pl-8 pb-2 text-5xl tracking-tighter *:lg:text-8xl">
                    Ritesh Shinde
                </h2>
                <span className=' pl-8 bg-gradient-to-r from-slate-300 to-stone-700 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Full stack Web Developer</span>
                    <p className=' pl-8 text-white my-2 max-wlg py-6 text-2xl leading-relaxed tracking-tighter gap-2'>
                      I am a passionate and detail-oriented full stack web developer with hands-on experience in React.js, Node.js, and Tailwind CSS. Currently pursuing a Bachelor of Science in Computer Science (3rd year), with a strong foundation in modern web technologies and a passion for building responsive, user-friendly web applications. Eager to contribute to dynamic development teams and grow as a full-stack developer.
                    </p>

                    <a href="../public/Ritesh_Shinde_Resume.pdf"
                    target='_blank'
                    rel='noopener noreferance'
                    download
                    className='bg-white rounded-full p-1 text-sm text-stone-800 m-5 hover:bg-black hover:text-orange-500 lg:text-xl lg:m-10 lg:p-4'> 
                    Downlode Resume

                    </a>

                    
            </div>
            </div>
            
           </div> 
          
        </div>

       
  )
}

export default Hero
