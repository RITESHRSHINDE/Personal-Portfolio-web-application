import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Route, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import "./index.css"

// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/Layout" Element={<Layout />} >

//     <Route path=" " Element={<Contact />}/>
//   </Route>
//    )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */ <App />}
  </StrictMode>,
)
