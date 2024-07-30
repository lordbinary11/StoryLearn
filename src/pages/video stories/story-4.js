import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';


const Story = () => {

  return (
    <div>
      <Header />
      <div className='display disp'>
        <h2><a href='#'>Track 2</a>/ <a href='#'>Video Stories</a>/ <a href='#'>The Magic Pot</a> </h2>
      </div>
      <div className='story'>
        <div className='ifr'>
        <iframe width="100%" height="400" src="hhttps://www.youtube.com/embed/ADi7F695d90?si=l723-t0gHK0uuHTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Story;
