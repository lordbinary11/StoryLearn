import React from 'react'
import '../assets/css/footer.css';
import lg from '../assets/images/logoindigo.png';

export default function footer() {
  return (
    <footer className='App-footer'>
       <img className=' f-logo' src={lg} alt="Logo" />
       <div className='footer-links'>
        <div className='f-element-1 hideOnMobile'>
          <img className='logo' src={lg} alt="Logo" />
          <p>StoryLearn is a comprehensive web-based educational platform designed to support tutors in delivering engaging, interactive, and effective learning experiences to children aged 7-12...</p>
        </div>
        <div className='f-element-2'>
          <h4>Company</h4>
          <p><a href='#'>About Us</a></p>
          <p><a href='#'>Privacy Policy</a></p>
        </div>
        <div className='f-element-3'>
          <h4>Suppot</h4>
          <p><a href='#'>FAQ</a></p>
          <p><a href='#'>Help Center</a></p>
        </div>
        <div className='f-element-4'>
          <h4>Contact Info</h4>
          <p><a href='#'>+233 55 968 1714</a></p>
          <p><a href='#'>mujahidshahid72@gmail.com</a></p>
        </div>
       </div>
        <div className='copyright'>
        <p><a href='#'>StoryLearn All Right Reserved, 2024</a></p>
        </div>
      </footer>
  )
}
