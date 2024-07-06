import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/signup.css';
import logo from '../assets/images/logowhite.png';
import lg from '../assets/images/logoindigo.png';
import img from '../assets/images/i-1.png';
import google from '../assets/images/google.png';
import { auth, db } from '../firebase'; // Import the auth and db objects from firebase.js
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email
      });
      console.log('User signed up and data stored:', user);
      navigate('/login'); // Navigate to the homepage on successful login
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('E-mail already in use');
      } else {
        setError(error.message); // General error handling
      }
    }
  };


  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Extract first name and last name from displayName if available
      let firstName = '';
      let lastName = '';
      const displayName = user.displayName;
      if (displayName) {
        const nameParts = displayName.split(' ');
        firstName = nameParts[0];
        lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      }
  
      // Save user info to Firestore
      await addUserInfoToFirestore(user.uid, firstName, lastName, user.email);
      
      console.log('User signed up with Google:', user);
      // Navigate to the homepage or another appropriate route on successful signup
      navigate('/login');
    } catch (error) {
      setError(error.message); // Handle Google signup error
      console.error('Error signing up with Google:', error);
    }
  };
  
  const addUserInfoToFirestore = async (uid, firstName, lastName, email) => {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      console.log('User info added to Firestore');
    } catch (error) {
      console.error('Error adding user info to Firestore:', error);
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
          <h2>Create Account</h2>
          <form onSubmit={handleSignup}>
            <div className='name'>
              <div className='label'>
                <label>First name</label>
                <input
                  type='text'
                  className='input-1'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='label'>
                <label>Last name</label>
                <input
                  type='text'
                  className='input-1'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
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
              <input type='submit' className='submit' value='Create Account' />
              <div className='already'>Already have an account? <a href='#'>Login</a></div>
              <div className='hr'>
                <hr />
                <span>or</span>
                <hr />
              </div>
              <button className='google' onClick={handleGoogleSignup}>
                <img className='g-icon' src={google} alt='google' />
                <span>Sign up with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
