import { auth, signInWithGoogle } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LoginContainer = styled('div')({
  height: '100vh',
  backgroundColor: '#a7c957',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoginCard = styled('div')({
  backgroundColor: 'white',
  borderRadius: '10px',
  width: '300px',
  height: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
});

const WelcomeText = styled('h1')({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '30px',
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
      <WelcomeText>Welcome to Pomododo</WelcomeText>
      <LoginCard>
        <Button variant="contained" onClick={() => signInWithGoogle()}>
          Login
        </Button>
      </LoginCard>
    </LoginContainer>
  );
>>>>>>> 442eaa591a899d226c0e853df8a5ee6a2c478c74
}

export default Login;