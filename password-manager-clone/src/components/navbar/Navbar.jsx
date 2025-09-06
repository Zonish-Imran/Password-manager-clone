import React from 'react'
import logo from '../../assets/images/10001.svg'
import '../navbar/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <h1 className='name'>Password Manager</h1>
        </div>
        <div className='nav-links'>
            <a href="/signup" className='signup-button'>Signup</a>
            <a href="/login" className='login-button'>Login</a>
        </div>
    </nav>
  )
}

export default Navbar