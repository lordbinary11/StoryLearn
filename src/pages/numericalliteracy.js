import React, { useState } from 'react';
import '../assets/css/numericalliteracy.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import { HiPlay } from 'react-icons/hi';
import { HiFolder } from 'react-icons/hi';
import { units } from '../components/units';
import { Link } from 'react-router-dom';


const iconMap = {
  HiPlay: HiPlay,
  HiFolder: HiFolder
};


function App() {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);

  

  return (
    <div className="app-container">
      <Header />
      <div className="app">
        <div className="sidebar">
          {units.map((unit) => (
            <div
              key={unit.id}
              className={`sidebar-item ${selectedUnit.id === unit.id ? 'active' : ''}`}
              onClick={() => setSelectedUnit(unit)}
            >
              {unit.logo && <span className="logo">{unit.logo}</span>}
              <div className="text-container">
                <span className={`title ${unit.id === 1 ? 'first-title' : ''}`}>{unit.title}</span>
                <span className={`subtitle ${unit.id === 1 ? 'first-subtitle' : ''}`}>{unit.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="m-sidebar">
  {units.map((unit) => (
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
              <h2>{selectedUnit.description.intro}</h2>
              <p>{selectedUnit.description.about}</p>
              <h3>{selectedUnit.description.discovery.title}</h3>
              <ul>
                {selectedUnit.description.discovery.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3>{selectedUnit.description.learning.title}</h3>
              <ul>
                {selectedUnit.description.learning.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{selectedUnit.description.loveIt}</p>
            </div>
          ) : selectedUnit.id === 2 ? (
            <div>
              <h2>{selectedUnit.title}: {selectedUnit.subtitle}</h2>
              <div className='about'>
                <h2>About This Unit</h2>
                <p>{selectedUnit.about}</p>
              </div>
              <div className='section1'>
                <h3>{selectedUnit.section1.title}</h3>
                <ul>
                  {selectedUnit.section1.items.map((item, index) => (
                    <li key={index}>
                    <a  className='link'>
                      {React.createElement(iconMap[item.logo])} {item.text}
                    </a>
                    </li>
                  ))}
                </ul>
                <a href='/track1/numerical_literacy/unit1' className='bt'>Visit</a>

              </div>
            </div>
          ) : (
            <div>
              <h2>{selectedUnit.title}: {selectedUnit.subtitle}</h2>
              <div className='about'>
                <h2>About This Unit</h2>
                {/* <p>{selectedUnit.about}</p> */}
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
