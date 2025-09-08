import React from 'react'
import p1 from "../projects/project-1.jpg"
import p2 from "../projects/project-2.webp"
import p0 from "../projects/project-1.webp"
import p3 from "../projects/istockphoto-477902875-1024x1024.jpg"
import p4 from "../projects/project-4.webp"
import Project from "./Project.jsx"
import Navbar from './Navbar.jsx'

function Projects () {
  return (
    <>
    <Navbar />
    <div className='p-8 items-center justify-center text-center mb-0 bg-slate-800'>

        <h2 className="text-center justify-center items-center mb-6  text-4xl text-white">Projects</h2>

      <Project  Project ="TIC TAC TOE" languages="HTML, CSS, Basics of JS" p={p1} discription="Built a fully functional browser-based Tic Tac Toe game with dynamic gameplay, win/draw detection, and reset functionality.
            Used JavaScript for logic handling and DOM manipulation, and styled the interface with responsive CSS.
            Demonstrated strong understanding of core web development principles and clean UI design."/>
      <Project Project ="ROCK PAPER SEIOSERS" languages="HTML, CSS, JavaScript" p={p2} />
      <Project Project ="LIVE WETHER APPLICATION" languages="React JS, JavaScript, JSX" p={p3} />
      <Project Project ="PERSONAL PORTFOLIO" languages="React JS, JavaScript,TailWind CSS, JSX" p={p4} />
      <Project Project ="SIMPLE CALAULATOR" languages="React JS, JavaScript,Tailwind Css, JSX" p={p0} />
       
      
    </div>
    </>
  )
}

export default Projects
