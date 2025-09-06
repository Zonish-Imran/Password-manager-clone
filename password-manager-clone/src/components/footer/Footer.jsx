import React from 'react'
import '../footer/Footer.css'

function Footer() {
    return (
        <>
            <section className='footer'>
                <div className='footer-left'>
                    <span className='button'>Try Our Additional Solution</span>
                    <h1>Password without saving password</h1>
                    <p>Let us store your passwords and auto-fill them into your favorite apps, so you can forget all about them. We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source.</p>
                </div>
                <div className='footer-right'>
                    <form className='contact-form'>
                        <span> Your Full Name</span>
                        <input type="text" placeholder="Name" />
                        <span> Your Spectre Secret</span>
                        <input type="password" placeholder="Secret Key" />

                        <span> Site Domain</span>
                        <input type="text" placeholder="https://example.com" />

                        <span> Site Password</span>
                        <input type="password" placeholder="********" />

                        <small>The information never leaves this page</small>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Footer