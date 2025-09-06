import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/hero/Hero'


function App() {

  return (
    <div className='container'>
      <Navbar />
      <Hero />

    </div>
  )
}

export default App
