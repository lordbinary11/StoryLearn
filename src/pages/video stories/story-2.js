import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';


const Story = () => {

  return (
    <div>
      <Header />
      <div className='display disp'>
        <h2><a href='#'>Track 2</a>/ <a href='#'>Video Stories</a>/ <a href='#'>It's A Firefly Night</a> </h2>
      </div>
      <div className='story'>
        <div className='ifr'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/hkz51Td9k5A?si=JTn1BU2XB5Bmm10A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Story;
