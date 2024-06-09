import lg from './lg.png';
import OBJECTS from './OBJECTS.png';
import './App.css';
import it1 from './assets/images/it1.png'
import it2 from './assets/images/it2.png'
import it3 from './assets/images/it3.png'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-container container">
            <div>
              <img className='logo' src={lg} alt="Logo" />
            </div>
            <ul className="menu-items">
              <li className='hideOnMobile'><a href="#about">Home</a></li>
              <li className='hideOnMobile'><a href="#my-works">About Us</a></li>
              <li className='hideOnMobile'><a href="#contact-me">Contact Us</a></li>
              <li className='sign-in'><a href="#contact-me">Sign in</a></li>
            </ul>
          </div>
        </nav>
        <div className='intro'>
          <div className='cont-1'>
            <div className='left'>
              <h1>The <span className='org'>Smart</span><br /> Choice For <span className='org'>Future</span></h1>
              <p>
              StoryLearn is a comprehensive web-based educational platform designed to support tutors in delivering engaging, interactive, and effective learning experiences to children aged 7-12...
              </p>
            </div>
            <div className='right'>
              <img className='obj' src={OBJECTS} alt="Objects" />
            </div>
          </div>
        </div>
      </header>

      <div className='cont-2'>
        <div className='f-1'>
          <div className='it1'>
            <img className='img' src={it1} />
          </div>
          <div className='text'>
            <h4>Interactive Lesson</h4>
            <p>Create engaging lesson presentations using multimedia elements. Various templates are available for different subjects and themes, allowing tutors to quickly build their lessons.</p>
          </div>
        </div>
        <div className='f-2'>
          <div className='it1'>
            <img className='img' src={it2} />
          </div>
          <div className='text'>
            <h4>Interactive Storytelling</h4>
            <p>Create interactive stories where students make choices that affect the narrative, enhancing engagement and comprehension. A library of pre-made interactive stories covering different subjects is available.</p>
          </div>
        </div>
        <div className='f-3'>
          <div className='it1'>
            <img className='img' src={it3} />
          </div>
          <div className='text'>
            <h4>Gamified Learning Activities</h4>
            <p>A suite of educational games is designed to reinforce learning objectives through fun and interactive activities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
