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
import {useState} from 'react';
import ResponsiveAppBar from './NavBar';



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

  const handleStudyChange = event => {
    setMessage(event.target.value);
  }
  const handleBreakChange = event => {
    setMessage1(event.target.value);
  }
  
  return (
    <><ResponsiveAppBar></ResponsiveAppBar><div style={{ backgroundColor: '#a7c957', height: '100vh' }}>
          <div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#a7c957', color: '#fff' }}>
                  <h1 style={{ backgroundColor: '#a7c957', padding: '10px', margin: 0 }}>
                      Leaderboard
                  </h1>
              </div>
          </div>
      </div></>
  );
}
