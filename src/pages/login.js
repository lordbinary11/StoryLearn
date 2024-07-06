import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/login.css';
import logo from '../assets/images/logowhite.png';
import lg from '../assets/images/logoindigo.png';
import img from '../assets/images/i-1.png';
import google from '../assets/images/google.png';
import { auth } from '../firebase'; // Import the auth object from firebase.js
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Create a navigate function

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      navigate('/home'); // Navigate to the homepage on successful login
    } catch (error) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            setError('Invalid username or password');
          } else {
            setError(error.message); // General error handling
          }
    }
  };

  


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User logged in with Google:', user);
      navigate('/home'); // Navigate to the homepage on successful login
    } catch (error) {
      setError(error.message); // Handle Google sign-in error
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className='container'>
      <div className='illustrations'>
        <img className='logo' src={logo} alt='logo' />
        <img className='i-1' src={img} alt='illustration' />
      </div>
      <div className='form'>
        <div className='fm'>
          <img className='logo showOnMobile' src={lg} alt='logo' />
          <h2>Log Into Your Account</h2>
          <form onSubmit={handleLogin}>
            <div className='field-2'>
              <div className='label-2'>
                <label>Email</label>
                <input
                  type='email'
                  className='input-2'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='label-2'>
                <label>Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className='input-2'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='checkbox-label'>
                <input
                  className='checkbox'
                  type='checkbox'
                  checked={passwordVisible}
                  onChange={togglePasswordVisibility}
                />
                <span>Show Password</span>
              </div>
              {error && <p className='error'>{error}</p>}
              <input type='submit' className='submit' value='Login' />
              <div className='already'>Don't have an Account? <a href='#'>SignUp</a></div>
              <div className='hr'>
                <hr />
                <span>or</span>
                <hr />
              </div>
              <button className='google' onClick={handleGoogleLogin}>
                <img className='g-icon' src={google} alt='google' />
                <span>Login with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
