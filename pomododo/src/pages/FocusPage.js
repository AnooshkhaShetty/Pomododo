import { addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { auth, db, userRef } from '../Firebase'

async function addTime (amount){
  let user = auth.currentUser;
  const docRef = userRef.doc(user)
  var oldTime = 0;
  docRef.get().then((doc) => {
    oldTime = doc.totalMinutes;
  })
  const data = {
    totalMinutes: oldTime + amount
  }
  userRef.doc(user).set(data)
}

function FocusPage() {
  const { state: { studyTime, breakTime} = {} } = useLocation();

  const [timeRemaining, setTimeRemaining] = useState(studyTime); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('study');

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeRemaining === 0) {
      setMode((prevMode) => (prevMode === 'study' ? 'break' : 'study'));
      setTimeRemaining(mode === 'study' ? (breakTime*60) : (studyTime*60));
    }
    return () => clearInterval(interval);
  }, [isRunning, timeRemaining, mode]);

  useEffect(() => {
    document.title = `${mode === 'study' ? 'Study' : 'Break'} - ${Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, '0')}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
  
    const head = document.head || document.getElementsByTagName('head')[0];
    const existingLink = head.querySelector('link[rel="shortcut icon"]');
    const newLink = document.createElement('link');
    newLink.rel = 'shortcut icon';
    newLink.href = mode === 'study' ? '/red_box.ico' : 'green_box.ico';
  
    if (existingLink) {
      head.removeChild(existingLink);
    }
  
    head.appendChild(newLink);
  }, [mode, timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const circleProgress = {
    backgroundColor: '#1f1f1f',
    borderRadius: '50%',
    width: '400px', // increase the width to 300px
    height: '400px', // increase the height to 300px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  const circleText = {
    fontSize: '8em', // Increase font size to 8em
    fontWeight: 'bold',
    color: '#fff'
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: mode === 'study' ? '#e84c3d' : '#a7c957', color: '#fff' }}>
      <h1 style={{ marginBottom: 20, fontSize: '3em' }}>{mode === 'study' ? 'Study' : 'Break'}</h1> {/* increase the font size to 3em */}
      <div style={circleProgress}>
        <p style={circleText}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
      </div>
      <div style={{ marginTop: '2em'}}>
        <button onClick={toggleTimer} style={{ padding: '1em 3em', borderRadius: '5px', border: 'none', backgroundColor: '#fff', color: '#1f1f1f', fontWeight: 'bold', fontSize: '1.2em', cursor: 'pointer' }}>{isRunning ? 'Pause' : 'Start'}</button> {/* increase the padding to 1em 3em and the font size to 1.2em */}
      </div>
    </div>
  );
}

export default FocusPage;