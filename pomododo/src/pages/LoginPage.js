import { auth, signInWithGoogle } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';


function Login(){

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    //If the user exists, navigate to the homepage
    if (user) {
        navigate("/selectmethod");
        return null;
    }

    return (
        <div className="Login">
            <h1> Welcome to Pomododo</h1>
            <Button onClick={() =>{signInWithGoogle()}}> Login </Button>
        </div>
    );
}

export default Login;
