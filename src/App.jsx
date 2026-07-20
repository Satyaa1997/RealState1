import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Project from './Component/Project'
import Contact from './Component/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  )
}

export default App
