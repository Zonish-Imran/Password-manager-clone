import '../seed/Seed.css'
import logo from '../../assets/images/10005.svg'
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function SeedPage() {
    const [seed] = useState([
        "BAG", "WORK", "PLAY", "CAMP",
        "ICE", "DOME", "US", "CUP",
        "ZERO", "OPEN", "HOUSE", "PENCIL",
        "UFO", "OPERA", "GUN", "INK"
    ]);

    // copy to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(seed.join(" "));
        alert("Seed copied to clipboard!");
    };
    return (
        <div className='seed-container'>
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
            {/* Right Side */}
            <div className="right-side">
                <h1>Your Seed</h1>

                <div className="seed-box">
                    {/* Words */}
                    <div className="seed-words">
                        {seed.map((word, i) => (
                            <span key={i} className="seed-word">{word}</span>
                        ))}
                    </div>
                    {/* Actions */}
                    <div className='btn'>
                        <button className="icon-btn">
                            <i className="fa-solid fa-download"></i> Save
                        </button>
                        <button onClick={copyToClipboard} className="icon-btn">
                            <i className="fa-solid fa-copy"></i> Copy
                        </button>
                    </div>

                </div>
                <p className="warning">
                    Please write these down in case you lose your seed
                </p>
                <button className="btn-next">Next</button>
                <p className="link-login">
                    Already have account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    )
}

export default SeedPage