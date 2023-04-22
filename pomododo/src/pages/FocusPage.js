import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [duration, setDuration] = useState(0);

  const startTimer = () => {
    setTimeRemaining(duration * 60);
  };

  useEffect(() => {
    let interval;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      document.title = (Math.floor(timeRemaining / 60))+":"+(timeRemaining % 60);
    }
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#a7c957', color: '#fff' }}>
      <h1 style={{ marginTop: '2em', marginBottom: '1em' }}>Pomododo</h1>
      <p style={{ fontSize: '8em', margin: 0 }}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
      <div style={{ marginTop: '2em' }}>
        <input type="number" value={duration} onChange={handleDurationChange} style={{ padding: '0.5em', borderRadius: '5px', border: 'none', marginRight: '1em' }} />
        <button onClick={startTimer} style={{ padding: '0.5em 2em', borderRadius: '5px', border: 'none', backgroundColor: '#fff', color: '#a7c957', fontWeight: 'bold', cursor: 'pointer' }}>Start Timer</button>
      </div>
    </div>
  );
}

export default Timer;