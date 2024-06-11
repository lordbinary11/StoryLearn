import React from 'react'
import lg from '../assets/images/lg.png';
import '../assets/css/header.css';
export default function header() {
  return (
    <header>
        <nav className="navbar">
          <div className="navbar-container container">
            <div>
              <img className='logo'  src={lg} alt="Logo" />
            </div>
            <ul className="menu-items">
              <li className='hideOnMobile'><a href="#about">Home</a></li>
              <li className='hideOnMobile'><a href="#my-works">About Us</a></li>
              <li className='hideOnMobile'><a href="#contact-me">Contact Us</a></li>
              <li className='sign-in'><a href="#contact-me">Sign in</a></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}
