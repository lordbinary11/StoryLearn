// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from  './pages/home'
import Signup from './pages/signup'
import Login from './pages/login' // Ensure you have a Homepage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} /> {/* Ensure this path renders your homepage */}
      </Routes>
    </Router>
  );
}

export default App;







// import React from 'react'
// import './App.css'
// import Homepage from  './pages/home'
// import Header from './components/Header'
// import SignUp from './pages/signup'
// import Login from './pages/login'

// export default function App() {
//   return (
//     <div className='App'>
//       <SignUp/>
//     </div>
//   )
// }
