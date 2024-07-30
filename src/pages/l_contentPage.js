// src/components/ContentPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { HiPlay, HiFolder } from 'react-icons/hi'; // Import icons
import Header from '../components/Header';
import  '../assets/css/nl_contentPage.css';
import { units } from '../components/l_units';

const iconMap = {
  HiPlay: HiPlay,
  HiFolder: HiFolder
};



const ContentPage = () => {
  const { id } = useParams();
  const unit = units.find(u => u.id === parseInt(id, 10));

  if (!unit) {
    return <div>Unit not found</div>;
  }

  return (
    <div className='content-page'>
    <Header/>
    <div className="m-content">
      {unit.id === 1 ? (
        <div>
          <h2>{unit.description.intro}</h2>
          <p>{unit.description.about}</p>
          <h3>{unit.description.discovery.title}</h3>
          <ul>
            {unit.description.discovery.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>{unit.description.learning.title}</h3>
          <ul>
            {unit.description.learning.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{unit.description.loveIt}</p>
        </div>
      ) : unit.id === 2 ? (
        <div>
          <h2>{unit.title}: {unit.subtitle}</h2>
          <div className='m-about'>
            <h2>About This Unit</h2>
            <p>{unit.about}</p>
          </div>
          <div className='section1'>
            <h3>{unit.section1.title}</h3>
            <ul>
              {unit.section1.items.map((item, index) => (
                <li key={index}>
                  <a href='#' className='link'>
                    {React.createElement(iconMap[item.logo])} {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h2>{unit.title}: {unit.subtitle}</h2>
          <div className='about'>
            <h2>About This Unit</h2>
            {/* Additional content can be added here if needed */}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ContentPage;
