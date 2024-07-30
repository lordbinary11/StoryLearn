import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/stories.css';
import { Link } from 'react-router-dom';

export default function Tracks() {
  return (
    <div className='cont'>
      <Header />
      <div className='display'>
        <h1><a href='#'>Track 2/</a> <a href='#'>Video Stories</a> </h1>
        <p>These are pre made video stories </p>
      </div>
      <div className='tracks-container'>
        <div className='tracks tc'>
          <Link to='/track2/video-stories/story-1' className='tt'>
            <div className='cd cc1'></div>
            <div className='txt'>
              <h4>The Lion, The Mouse and The Sleepy Bear</h4>
            </div>
          </Link>
          <Link to='/track2/video-stories/story-2' className='tt'>
            <div className='cd cc2'></div>
            <div className='txt'>
              <h4>It's A Firefly Night</h4>
            </div>
          </Link>
          <Link to='/track2/video-stories/story-3' className='tt'>
            <div className='cd cc3'></div>
            <div className='txt'>
              <h4>The Lazy Begger</h4>              
            </div>
          </Link>
          <Link  to='/track2/video-stories/story-4' className='tt'>
            <div className='cd cc4'></div>
            <div className='txt'>
              <h4>The Magic Pot</h4>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
