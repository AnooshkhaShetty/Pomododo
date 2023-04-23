import { auth, signInWithGoogle } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LoginContainer = styled('div')({
  height: '100vh',
  backgroundColor: '#6a994e',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoginCard = styled('div')({
  backgroundColor: 'white',
  borderRadius: '10px',
  width: '300px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
});

const WelcomeText = styled('h1')({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '50px',
  fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'white',
});

const ProfileImage = styled('img')({
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  objectFit: 'cover',
});

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //If the user exists, navigate to the homepage
  if (user) {
    navigate("/selectmethod");
    return null;
  }

  return (
    <LoginContainer>
      <WelcomeText>Pomododo</WelcomeText>
      <LoginCard>
        <div>
            <h2>{localStorage.getItem("name") ? "Welcome back," : ""}</h2>
          <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{localStorage.getItem("name")}</h1>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <ProfileImage src={localStorage.getItem("photoURL")} />
          </div>
        </div>
        <Button variant="contained" onClick={() => signInWithGoogle()} color="success">
          Login
        </Button>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;