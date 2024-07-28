import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../assets/css/tracks.css';
import { Link } from 'react-router-dom';



export default function Tracks() {
  return (
    <div className='cont'>
      <Header />
      <div className='display'>
        <h1>Track 1: Interactive Lessons</h1>
        <p>These suites contain pre made interactive lessons</p>
      </div>
      <div className='tracks-container'>
        <div className='tracks'>
          <div className='t-1'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card c-3'></div>
            </div>
            <h4>Literacy</h4>
            <p>20 templates</p>
          </div>
          <Link to="/track1/numerical_literacy" className='t-2'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card t2c3'></div>
            </div>
            <h4>Numerical Literacy</h4>
            <p>20 templates</p>
          </Link>
          <div className='t-3'>
            <div className='c-c'>
              <div className='card c-1'></div>
              <div className='card c-2'></div>
              <div className='card t3c3'></div>
            </div>
            <h4>Environmental Science</h4>
            <p>20 templates</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
