// import FRONTEND packages
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc} from "firebase/firestore";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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
const auth = getAuth(app)
const db = getFirestore(app);
const userRef = collection(db, 'Users');

const provider = new GoogleAuthProvider();

function signInWithGoogle () {
  signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("name", result.user.displayName) 
    localStorage.setItem("photoURL", result.user.photoURL) 
    /*
    let user = auth.currentUser
    const docRef = doc(db, "Users", user.uid)
    const snapshot = getDoc(docRef)
    if (!snapshot.exists()){
      setDoc((docRef), {
        userName: user.displayName,
        totalMinutes: parseFloat(0),
        userGoal: parseFloat(0)
      })
    }*/
  })
}

async function addTime (amount){
  let user = auth.currentUser;
  var oldTime = parseFloat(0);
  const docRef = doc(db, "Users", user.uid)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()){
    oldTime = snapshot.data().totalMinutes;
  }

  await setDoc((docRef),{
    userName: user.displayName,
    totalMinutes: oldTime + amount
  })
}

async function getTime() {
  let user = auth.currentUser;
  let time = parseFloat(0);
  const docRef = doc(db, "Users", user.uid)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()){
    time = snapshot.data().totalMinutes
  }
  return time
}

async function getGoal() {
  let user = auth.currentUser;
  const goal = parseFloat(0);
  const docRef = doc(db, "Users", user.uid)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()){
    goal = snapshot.data().userGoal
  }
  return goal
}

function LogoutButton() {
  const navigate = useNavigate();

  // Function to handle logout and navigation
  const handleLogout = () => {
    auth.signOut(); // Sign out the user
    navigate('/'); // Navigate back to the home screen
  };

  return (
    <Button variant="contained" onClick={handleLogout} color="success">Logout</Button>
  );
}


export{
  signInWithGoogle,
  LogoutButton,
  auth,
  db,
  userRef,
  addTime,
  getTime,
  getGoal
}
