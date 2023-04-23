// import { auth, signInWithGoogle } from "../Firebase"
// import { useNavigate } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth';

// function Login(){

//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();
    
//     //If the user exists, navigate to the homepage
//     if (user) {
//         navigate("/selectmethod");
//         return null;
//     }

//     return (
//         <div className="Login">
//             <h1> Welcome to Pomododo</h1>
//             <button onClick={() =>{signInWithGoogle()}}> Login </button>
//             <h1>{localStorage.getItem("name")}</h1>
//             <img src = {localStorage.getItem("photoURL")} />
//         </div>
//     );
// }

// export default Login;

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
  fontSize: '30px',
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
      <WelcomeText>Welcome to Pomododo</WelcomeText>
      <LoginCard>
        <Button variant="contained" onClick={() => signInWithGoogle()}>
          Login
        </Button>
        <div>
          <WelcomeText>{localStorage.getItem("name")}</WelcomeText>
          <ProfileImage src={localStorage.getItem("photoURL")} />
        </div>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;