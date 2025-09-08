import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar.jsx'
import Technologies from './Components/technologies'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import Github from './Components/Github.jsx'



export default function App() {
  const router = createBrowserRouter([
 {path:"/",
  element: <Home />
 },
 {
  path:"/About",
  element:<About />
 },
  {
  path:"/Contact",
  element:<Contact />
 },
 {
  path: "/Projects",
  element:<Projects />
 },
 {
  path: "/Github",
  element: <Github />
 }
])
  return (
    <RouterProvider router={router} />
 

 );
}


