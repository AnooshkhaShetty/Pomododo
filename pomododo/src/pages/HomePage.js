import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#a7c957', color: '#fff' }}>
        <h1 style={{ backgroundColor: '#a7c957', padding: '10px', margin: 0 }}>
          Choose your method:
        </h1>
      </div>
    <div style={gridStyles}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/timetofocus" state={{ studyTime: 25, breakTime:5  }}>
          <CardMedia
            component="img"
            height="150"
            image={require ('../images/tomato.jpg')}
            alt="tomato"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pomodoro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hit the books for 25-minute intervals with short 5-minute breaks in between.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/timetofocus" state={{ studyTime: 30, breakTime:30  }}>
          <CardMedia
            component="img"
            height="150"
            image={require ('../images/balance.jpeg')}
            alt="balance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              30/30 Split
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Find balance. Study for 30 minutes, then wind down for 30 minutes.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/timetofocus" state={{ studyTime: 55, breakTime:5 }}>
          <CardMedia
            component="img"
            height="150"
            image={require ('../images/coffee.jpeg')}
            alt="coffeebeans"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Grind Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Study for 55 minutes at a time, and take 5 minute breaks.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/timetofocus" state={{ studyTime: 45, breakTime:15 }}>
          <CardMedia
            component="img"
            height="150"
            image={require ('../images/studying.jpg')}
            alt="study"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              45/15 Split
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The classroom setup. 45 minutes of study, and 15 minutes of break.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/timetofocus" state={{ studyTime: 99, breakTime:0 }}>
          <CardMedia
            component="img"
            height="150"
            image={require ('../images/workbythebeach.jpg')}
            alt="bythebeach"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              No Breaks!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Let's get that project done. Keep working without breaks until you finish.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 230}}>
            <AddCircleIcon fontSize="large"/>
          </CardContent>
        </CardActionArea>
      </Card>


    </div>
    </div>
  );
}
