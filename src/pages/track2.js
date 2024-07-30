import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/tracks.css';
import { Link } from 'react-router-dom';



export default function Tracks() {
  return (
    <div className='cont'>
      <Header />
      <div className='display'>
        <h1>Track 2: Interactive Storytelling</h1>
        <p>These suites contain pre made interactive stories</p>
      </div>
      <div className='tracks-container'>
        <div className='tracks'>
        <Link to="/track2/audio-stories" className='t-1'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card c33'></div>
            </div>
            <h4>Audio Stories</h4>
            <p>20 templates</p>
          </Link>
          <Link to="/track2/video-stories" className='t-2'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card t2'></div>
            </div>
            <h4>Story Videos</h4>
            <p>20 templates</p>
          </Link>
          <Link to="/track2/adventure-stories" className='t-3'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card t3'></div>
            </div>
            <h4>Adventure Choices</h4>
            <p>20 templates</p>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
