import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/rocket.css';
// import { Link } from 'react-router-dom';
// import games from '../components/games'



export default function Tracks() {
  return (
    <div className='cont'>
      <Header />
      <div className='disply'>
        <h1>Track 2: Educational Games</h1>
        <h2>Rocket CowBoy</h2>
      </div>
      <div className='rocket'>
        <div className='instr'>
           <div>Instructions</div>
           <p>Survive as long as you can by defending yourself with a powerful weapon that has a little too much recoil!</p>
           <ul>
            <li>WASD or ARROW KEYS to move</li>
            <li>CLICK to fire</li>
            <li>Defeat all enemies and collect the star to start the next wave of enemies!</li>
            <li>Use the powerful recoil from your rocket-like weapon to move quickly around the world and to reach high places.</li>
           </ul>
        </div>
        <iframe src="https://scratch.mit.edu/projects/1045080074/embed" allowtransparency="true" width="50%" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
      
      <Footer/>
    </div>
  );
}
