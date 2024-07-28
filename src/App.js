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
// import Homepage from  './pages/home'
// import Header from './components/Header'
// import SignUp from './pages/signup'
// import Login from './pages/login'
// import Tracks from './pages/tracks'
// import NLiteracy from './pages/numericalliteracy'

// export default function App() {
//   return (
//     <div className='App'>
//       <NLiteracy/>
//     </div>
//   )
// }

// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentPage from './pages/contentPage';
import App from './pages/numericalliteracy'; // Assuming this is your main component
import Homepage from  './pages/home'
import Tracks from './pages/track1'
import Unit1 from './pages/unit1'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/track1/numerical_literacy" element={<App />} />
        <Route path="/track1" element={<Tracks />} />
        <Route path="/track1/numerical_literacy/unit1" element={<Unit1 />} />
        <Route path="track1/numerical_literacy/:id" element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;


