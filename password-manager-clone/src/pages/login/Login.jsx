import React, { useState } from 'react'
import '../login/Login.css'
import logo from '../../assets/images/10005.svg'
import { Link } from "react-router-dom";

function Login() {
    const [keySeed, setKeySeed] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Key Seed: " + keySeed);
    };

    return (
        <div className='login-container'>
            {/* Left side */}
            <div className='left-side'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h1 className='name'>Password Manager</h1>
                </div>
                <div className='desc'>
                    <p>
                        Login to your account with seed , We do the heavy lifting in a no-nonsense, 
                        ad-free, tracker-free, and cloud-free manner. Free and open source.
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className='right-side'>
                <div className="login-box">
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Key Seed</label>
                        <input
                            type="text"
                            value={keySeed}
                            onChange={(e) => setKeySeed(e.target.value)}
                            placeholder="Enter your key seed..."
                            required
                        />
                        <button type="submit">Next</button>
                    </form>
                    <p>
                        Don’t you have any account? <Link to="/signup">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
