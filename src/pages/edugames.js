import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/games.css';
import { Link } from 'react-router-dom';
import games from '../components/games'



export default function Tracks() {
  return (
    <div className='cont'>
      <Header />
      <div className='disply'>
        <h1>Track 2: Educational Games</h1>
        <p>These suites contain pre made interactive stories</p>
      </div>
      <div className="games-container">
        {games.map(game => (
          <div key={game.id} className="game-card">
          <div className='sec1'>
            <img src={game.image} alt={game.title} className="game-image" />
            <div className='sec2'>
              <div className='hd'>{game.title}</div>
              <p>{game.description}</p>
            </div>
          </div>
          {game.id === 11 ? (
            <Link to={game.link}  className="game-link">
              Play Now
            </Link>
          ):(
            <a href={game.link}  rel="noopener noreferrer" className="game-link">
              Play Now
            </a>
          )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
