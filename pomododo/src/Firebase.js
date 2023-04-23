// import FRONTEND packages
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGDfgT2qYKCXu7tIkWLktkvnTIABwJR6g",
  authDomain: "lahacks-7f7b5.firebaseapp.com",
  projectId: "lahacks-7f7b5",
  storageBucket: "lahacks-7f7b5.appspot.com",
  messagingSenderId: "670190086390",
  appId: "1:670190086390:web:0126f8a7fd20582fb324d7",
  measurementId: "G-30HYP50JEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
const userRef = collection(db, 'Users');

const provider = new GoogleAuthProvider();

function signInWithGoogle () {
  signInWithPopup(auth, provider).then((result) => {
  })
}



function LogoutButton() {
  const navigate = useNavigate();

  // Function to handle logout and navigation
  const handleLogout = () => {
    auth.signOut(); // Sign out the user
    navigate('/'); // Navigate back to the home screen
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}


export{
  signInWithGoogle,
  LogoutButton,
  auth,
  db,
  userRef
}
