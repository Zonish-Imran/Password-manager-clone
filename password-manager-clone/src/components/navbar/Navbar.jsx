import React from 'react'
import logo from '../../assets/images/10001.svg'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1 className='name'>Password Manager</h1>
      </div>
      <div className='nav-links'>
        <Link to="/signup" className='signup-button'>Signup</Link>
        <Link to="/login" className='login-button'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar