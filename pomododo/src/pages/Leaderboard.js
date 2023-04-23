import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import ResponsiveAppBar from './NavBar';
import { auth, getTime, getGoal } from "../Firebase"
import { useAuthState } from 'react-firebase-hooks/auth';




const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 0fr))',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: '#a7c957',
};

export default function ActionAreaCard() {
  const [customStudy, setMessage] = useState('');
  const [customBreak, setMessage1] = useState('');
  const[user] = useAuthState(auth);
  const [myTime, setMyTime] = useState(0);

  useEffect(() => {
    async function fetchTime() {
      const time = await getTime();
      setMyTime(time);
    }
    fetchTime();
  }, []);

  const handleStudyChange = event => {
    setMessage(event.target.value);
  }
  const handleBreakChange = event => {
    setMessage1(event.target.value);
  }

  const hrs = Math.floor(myTime/60)
  const mins = Math.floor(myTime - (60*hrs))
  const secs = Math.floor((myTime-mins)*60)

  
  return (
    <><ResponsiveAppBar></ResponsiveAppBar><div style={{ backgroundColor: '#a7c957', height: '100vh' }}>
          <div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#a7c957', color: '#fff' }}>
                  <h1 style={{ backgroundColor: '#a7c957', padding: '50px', margin: 0, fontSize: '60px'}}>
                      My Dashboard
                  </h1>
                  <img src={localStorage.getItem("photoURL")} style={{borderRadius: '40%', padding: '50px', scale: '200%'}}/>
                  <h1 style={{ backgroundColor: '#a7c957', padding: '50px', margin: 0, fontSize: '50px'}}>
                    Total Time Completed: <br />
                  </h1>
                  <h2 style={{ backgroundColor: '#a7c957', padding: '20px', margin: 0, fontSize: '40px'}}>
                    {hrs} hours, {mins} minutes, {secs} seconds
                  </h2>
              </div>
          </div>
      </div></>
  );
}
