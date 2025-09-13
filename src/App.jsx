import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <Navbar/>
      <Outlet/>
      <Footer/>
   
    </>
  )
}

export default App
