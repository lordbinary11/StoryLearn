import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logoindigo.png';
import '../assets/css/header.css';
import { HiHome, HiUser, HiLogout, HiHeart, HiPhone } from "react-icons/hi";
import { Link } from 'react-router-dom';

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
        <div className="navbar-container">
          <div className='h-div'>
            <img className=' h-logo' src={logo} alt="Logo" />
          </div>
          <ul className="menu-items">
            <li className='hideOnMobile'>
              <Link to="/" >Home</Link>
            </li>
            <li className='hideOnMobile'>
              <Link to="/about-us" >About Us</Link>
            </li>
            <li className='hideOnMobile'>
              <Link to="/contact-us" >Contact Us</Link>
            </li>
            {/* <li className='sign-in'><a href="#contact-me">Sign in</a></li> */}
            <button onClick={toggleVisibility} className='button'>{isVisible ? 'Hide' : 'Menu'}</button>
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
            {/* <li className="list-item">
              <HiLogout className="list-item-icon" />
              <span>Sign Out</span>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
}
