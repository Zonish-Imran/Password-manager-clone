import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Hero from './pages/hero/Hero'


function App() {

return(
  <div>
   < Hero/>
   <AppRoutes />
   </div> 
)

}

export default App
