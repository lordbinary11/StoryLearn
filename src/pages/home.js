import OBJECTS from '../assets/images/OBJECTS.png';

import '../assets/css/home.css';
import it1 from '../assets/images/it1.png'
import it2 from '../assets/images/it2.png'
import it3 from '../assets/images/it3.png'
import img3 from '../assets/images/prem.png'
import icon1 from '../assets/images/icon1.png'
import game from '../assets/images/game.png'
import Header from '../components/Header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';



function App() {

  return (
    <>
      <Header/>
      
      <div className='intro'>
          <div className='cont-1'>
            <div className='left'>
              <h1 >The <span className='org'>Smart</span><br /> Choice For <span className='org'>Future</span></h1>
              <p className='mt-20'>
              StoryLearn is a comprehensive web-based educational platform designed to support tutors in delivering engaging, interactive, and effective learning experiences to children aged 7-12...
              </p>
            </div>
            <div className='right'>
              <img className='obj' src={OBJECTS} alt="Objects" />
            </div>
          </div>
        </div>
      
      <div className='cont-2 mt-30'>
        <h1 className='text-3xl font-bold'>Our Tracks</h1>
        <p>These represent our core tracks, outlining the main directions in which we focus our resources and attention.</p>
      </div>

      <div className='cont-3'>
        <div className='f-1'>
          <div className='it1'>
            <img className='img' src={it1} />
          </div>
          <div className='text'>
            <h4>Interactive Lesson</h4>
            <p>Create engaging lesson presentations using multimedia elements. Various templates are available for different subjects and themes, allowing tutors to quickly build their lessons.</p>
            <div className='visit'>
              <Link to="/track1" href='tracks.js'>Visit</Link>
            </div>
          </div>
        </div>
        <div className='f-2'>
          <div className='it1'>
            <img className='img' src={it2} />
          </div>
          <div className='text'>
            <h4>Interactive Storytelling</h4>
            <p>Create interactive stories where students make choices that affect the narrative, enhancing engagement and comprehension. A library of pre-made interactive stories covering different subjects is available.</p>
            <div className='visit'>
              <a href='#'>Visit</a>
            </div>
          </div>
        </div>
        <div className='f-3'>
          <div className='it1'>
            <img className='img' src={it3} />
          </div>
          <div className='text'>
            <h4>Gamified Learning Activities</h4>
            <p>A suite of educational games is designed to reinforce learning objectives through fun and interactive activities.</p>
            <div className='visit'>
              <a href='#'>Visit</a>
            </div>
          </div>
        </div>
      </div>

      <div className='cont-4'>
        <div className='p-left'>
          <img className='img3' src={img3} /> 
        </div>
        <div className='p-right'>
          <h1>Premium <span className='org'>Learning</span><br></br> Experience</h1>
          <a className='prem-1' href='#'>
            <img src={icon1} className='icon' />
            <div className='txt'>
              <h4>Create Presentations</h4>
              <p>Access the StoryLearn editor to create your own presentation or edit existing ones.</p>
            </div>
            
          </a>
          <a className='prem-1' href='#'>
            <img src={icon1} className='icon' />
            <div className='txt'>
              <h4>Make Up Stories</h4>
              <p>Access the StoryLearn editor to create your own interactive stories.</p>
            </div>
          </a>
          <a className='prem-1' href='#'>
            <img src={game} className='icon' />
            <div className='txt'>
              <h4>Create Gaming Activities</h4>
              <p>Access the StoryLearn editor to create your own interactive gaming activities.</p>
            </div>
          </a>
        </div>
      </div>

      <div className='cont-5'>
        <h1>Subscribe to our newsletter</h1>
        <div className='input-container'>
          <input type='text' placeholder='johndoe@example.com' />
          <button type='submit'>Send</button>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default App;
