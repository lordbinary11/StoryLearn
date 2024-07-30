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
        <h1><a href='#'>Track 2/</a> <a href='#'>Audio Stories</a> </h1>
        <p>These suites contain pre made stories that support read out </p>
      </div>
      <div className='tracks-container'>
        <div className='tracks tc'>
          <Link to='/track2/audio-stories/story-1' className='tt'>
            <div className='cd c1'></div>
            <div className='txt'>
              <h4>The Moonlit Tea Party</h4>
            </div>
          </Link>
          <Link to='/track2/audio-stories/story-2' className='tt'>
            <div className='cd c2'></div>
            <div className='txt'>
              <h4>The Brightest Pupil</h4>
            </div>
          </Link>
          <Link to='/track2/audio-stories/story-3' className='tt'>
            <div className='cd c3'></div>
            <div className='txt'>
              <h4>The Lost Enchantment</h4>              
            </div>
          </Link>
          <Link  to='/track2/audio-stories/story-4' className='tt'>
            <div className='cd c4'></div>
            <div className='txt'>
              <h4>Amina's Magical Adventure</h4>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
