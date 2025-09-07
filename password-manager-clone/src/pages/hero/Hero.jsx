import React from 'react'
import './Hero.css'
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Hero() {
  return (
    <>
      <div className='container'>
        <section>
          <Navbar />
        </section>
        <section className='hero'>
          <div className='hero-left'>
            <span className='button'>Cross-platform Password Manager</span>
            <h1>Secure Your Systems with the Ultimate  Password Manager</h1>
            <p>Let us store your passwords and auto-fill them into your favorite apps,
              so you can forget all about them. We do the heavy lifting in a
              no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open
              source.</p>
            <button className='btn-get-started'>Get Started</button>
          </div>
        </section>
        <section>
          <Cards />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Hero