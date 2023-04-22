import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    <Typography variant="h4" align="center" gutterBottom>
    Choose your method:
  </Typography>
    <div style={gridStyles}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={require ('../images/studying.jpg')}
            alt="coffeebeans"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              45/15 Split
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You've got to get this done. Study continously without breaks.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={require ('../images/choose.jpeg')}
            alt="coffeebeans"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Custom
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Choose your study and break intervals.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    </div>
  );
}
