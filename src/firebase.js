// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqd4JtaTu2MTXsdwzYTIVPuo17LZTw7vA",
  authDomain: "storylearn-16835.firebaseapp.com",
  projectId: "storylearn-16835",
  storageBucket: "storylearn-16835.appspot.com",
  messagingSenderId: "507805660076",
  appId: "1:507805660076:web:db37937d20f1de0af5c009",
  measurementId: "G-YY43NNX7QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);