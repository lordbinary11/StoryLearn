import React, { useState } from 'react';
import '../assets/css/unit1.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HiPlay, HiFolder } from 'react-icons/hi';
import { unit1 } from '../components/l_units';
import { Button } from 'flowbite-react';




function App() {
  const [selectedUnit, setSelectedUnit] = useState(unit1[0]);

  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const correctAnswer = 13;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(answer, 10) === correctAnswer) {
      setMessage('✅Correct answer, good job🎊!');
    } else {
      setMessage('❌Different answer, try again🙂.');
    }
  };

  

  return (
    <div className="app-container">
      <Header />
      <div className="app">
        <div className="sidebar">
          <a className='unit' href='/track1/literacy'>Unit 1</a>
          {unit1.map((unit) => (
            <div
              key={unit.id}
              className={`sidebar-item ${selectedUnit.id === unit.id ? 'active' : ''}`}
              onClick={() => setSelectedUnit(unit)}
            >
              {unit.logo && <span className="lg">{React.createElement(unit.logo)}</span>}
              <div className="text-container">
                <span className='title'>{unit.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="m-sidebar">
  {unit1.map((unit) => (
    <a
      key={unit.id}
      href={unit.link}
      className={`sidebar-item ${selectedUnit.id === unit.id ? 'active' : ''}`}
      onClick={() => setSelectedUnit(unit)}
    >
      {unit.logo && <span className="logo">{unit.logo}</span>}
      <div className="text-container">
        <span className={`title ${unit.id === 1 ? 'first-title' : ''}`}>{unit.title}</span>
        <span className={`subtitle ${unit.id === 1 ? 'first-subtitle' : ''}`}>{unit.subtitle}</span>
      </div>
    </a>
  ))}
</div>


        <div className="content">
          {selectedUnit.id === 1 ? (
            <div>
              <h2 className='first-title'>{selectedUnit.title}</h2>
              <p className='m-subtitle'>{selectedUnit.subtitle}</p>

              <h2>{selectedUnit.question1.title}</h2>
              <p>{selectedUnit.question1.p1}</p>
              <p>{selectedUnit.question1.p2}</p>
              <p><img src={selectedUnit.question1.img1} /></p>

              <h2>{selectedUnit.question2.title}</h2>
              <p>{selectedUnit.question2.p1}</p>
              <p>{selectedUnit.question2.p2}</p>
              <p><img src={selectedUnit.question2.img2} /></p>


              <h2>{selectedUnit.question3.title}</h2>
              <p>{selectedUnit.question3.p1}</p>
              <p>{selectedUnit.question3.p2}</p>
              <p><img src={selectedUnit.question3.img3} /></p>

              <h2>{selectedUnit.question4.title}</h2>
              <p>{selectedUnit.question4.p1}</p>
              <p>{selectedUnit.question4.p2}</p>
              <p><img src={selectedUnit.question4.img4} /></p>
              <h2>{selectedUnit.question4.p3}</h2>
              <p><img src={selectedUnit.question4.img5} /></p>

              <h2>{selectedUnit.question5.title}</h2>
              <p>{selectedUnit.question5.p1}</p>
              <p>{selectedUnit.question5.p2}</p>


            </div>
          ) : selectedUnit.id === 7 ? (
            <div>
              <h2 className='first-title'>{selectedUnit.title}</h2>
              <a href='' className='unit'>Unit 1</a>
              <i>Hint: Use the number line to help solve 3 + 10</i>
               <form onSubmit={handleSubmit}>
               <div className='qtn'>
               <input
                   className='field'
                   type="number"
                   value={answer}
                   onChange={(e) => setAnswer(e.target.value)}
                 />
               <h2>= 3 + 10?</h2>                
                </div>
                 <input className='bt-n' type="submit" value='Submit'/>
               </form>
               <p><img src={selectedUnit.img8}/></p>
               {message && <p>{message}</p>}
            </div>

          ): (
            <div>
              <h2 className='first-title'>{selectedUnit.title}</h2>
              <a href='' className='unit'>Unit 1</a>
              <div className='iframe'>
              <iframe width="100%" height="100%" src={selectedUnit.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>         
              </div>

            </div>
          )}
        </div>


        
      </div>
      <div className='m-f'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
