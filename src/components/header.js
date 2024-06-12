import React, { useState, useRef, useEffect } from 'react';
import lg from '../assets/images/lg.png';
import '../assets/css/output.css';
import { HiHome, HiUser, HiLogout, HiHeart, HiPhone } from "react-icons/hi";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container container">
          <div>
            <img className='logo' src={lg} alt="Logo" />
          </div>
          <ul className="menu-items">
            <li className='hideOnMobile'><a href="#about">Home</a></li>
            <li className='hideOnMobile'><a href="#my-works">About Us</a></li>
            <li className='hideOnMobile'><a href="#contact-me">Contact Us</a></li>
            <li className='sign-in'><a href="#contact-me">Sign in</a></li>
            <button onClick={toggleVisibility} className='button'>{isVisible ? 'Hide' : 'Show'}</button>
          </ul>
        </div>
      </nav>
      {isVisible && (
        <div ref={divRef} className='s-b'>
          <ul className='list'>
            <li className="list-item">
              <HiHome className="list-item-icon" />
              <span>Home</span>
            </li>
            <li className="list-item">
              <HiUser className="list-item-icon" />
              <span>Dashboard</span>
            </li>
            <li className="list-item">
              <HiHeart className="list-item-icon" />
              <span>About Us</span>
            </li>
            <li className="list-item">
              <HiPhone className="list-item-icon" />
              <span>Contact Us</span>
            </li>
            <li className="list-item">
              <HiLogout className="list-item-icon" />
              <span>Sign Out</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
