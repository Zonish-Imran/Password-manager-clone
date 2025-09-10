import React from 'react'
import logo from '../../assets/images/10005.svg'
import '../signup/Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='signup-container'>
            <div className='left-side'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h1 className='name'>Password Manager</h1>
                </div>
                <div className='desc'>
                    <p>
                        Login to your account with seed , We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source.
                    </p>
                </div>
            </div>
            <div className='right-side'>
                <div className="signup-box">
                    <h1>Register Account</h1>
                    <p>Important Note : <br />
                        On the next page you will see a series of 16 words. This is your unique and private seed and it is the ONLY way to recover your wallet in case of loss or manifestation. It is your responsibility to write it down and store it in a safe place outside of the password manager app
                    </p>
                    <Link to="/seed">
                        <button>I understand, show me my seed</button>
                    </Link>
                    <p className='link'>
                        Already have account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup