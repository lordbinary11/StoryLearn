import React from 'react'
import '../assets/css/signup.css'
import logo from '../assets/images/logo.png'
import img from '../assets/images/i-1.png'

export default function signup() {
  return (
    <div className='container'>
      <div className='illustrations'>
        <img className='logo' src={logo} alt='logo' />
        <h1>Create An Account</h1>
        <img className='i-1' src={img} />
      </div>
        <div className='form'>
          <div className='fm'>
            <h2>Create Account</h2>
            <form>
              <div className='name'>
                <input type='email' placeholder='johndoe@example.com' />
                <input type='email' placeholder='johndoe@example.com' />
              </div>
              <input type='email' placeholder='johndoe@example.com' />
              <input type='email' placeholder='johndoe@example.com' />
              <input type='email' placeholder='johndoe@example.com' />
            </form>
           </div>
        </div>
    </div>
  )
}
