import React from 'react'
import Navdarr from './Components/Navbar.jsx'
import Technologies from './Components/technologies'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navdarr />
      <Outlet />
      <Technologies />
    </>
  )
}

export default Layout
