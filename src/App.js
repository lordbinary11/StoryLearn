// src/App.js
// import React from 'react';
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from  './pages/home'
// import Signup from './pages/signup'
// import Login from './pages/login' // Ensure you have a Homepage component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Homepage />} /> {/* Ensure this path renders your homepage */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;







// import React from 'react'
// import './App.css'
// import Story from './pages/story'

// export default function App() {
//   return (
//     <div className='App'>
//       <Story/>
//     </div>
//   )
// }

// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NL_ContentPage from './pages/nl_contentPage';
import L_ContentPage from './pages/l_contentPage';
import App from './pages/numericalliteracy';
import Literacy from './pages/literacy';
import Homepage from  './pages/home'
import Track1 from './pages/track1'
import Track2 from './pages/track2'
import NL_Unit1 from './pages/nl_unit1'
import L_Unit1 from './pages/l_unit1'
import AudioStories from './pages/audio_stories'
import VideoStories from './pages/video_stories'
import Story1 from './pages/audio stories/story-1'
import Story2 from './pages/audio stories/story-2'
import Story3 from './pages/audio stories/story-3'
import Story4 from './pages/audio stories/story-4'
import VStory1 from './pages/video stories/story-1'
import VStory2 from './pages/video stories/story-3'
import VStory3 from './pages/video stories/story-3'
import VStory4 from './pages/video stories/story-4'
import EduGames from './pages/edugames'
import Rocket from './pages/rocket'
import About from './pages/about'
import Contact from './pages/contact';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/track1/numerical_literacy" element={<App />} />
        <Route path="/track1/literacy" element={<Literacy />} />
        <Route path="/track1" element={<Track1 />} />
        <Route path="/track2" element={<Track2 />} />
        <Route path="/track2/audio-stories" element={<AudioStories />} />
        <Route path="/track2/audio-stories/story-1" element={<Story1 />} />
        <Route path="/track2/audio-stories/story-2" element={<Story2 />} />
        <Route path="/track2/audio-stories/story-3" element={<Story3 />} />
        <Route path="/track2/audio-stories/story-4" element={<Story4 />} />
        <Route path="/track2/video-stories" element={<VideoStories />} />
        <Route path="/track2/video-stories/story-1" element={<VStory1 />} />
        <Route path="/track2/video-stories/story-2" element={<VStory2 />} />
        <Route path="/track2/video-stories/story-3" element={<VStory3 />} />
        <Route path="/track2/video-stories/story-4" element={<VStory4 />} />
        <Route path="/track3/edugames" element={<EduGames />} />
        <Route path="/track3/edugames/rocket" element={<Rocket />} />
        <Route path="/track1/numerical_literacy/unit1" element={<NL_Unit1 />} />
        <Route path="/track1/literacy/unit1" element={<L_Unit1 />} />
        <Route path="track1/numerical_literacy/:id" element={<NL_ContentPage />} />
        <Route path="track1/literacy/:id" element={<L_ContentPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;


