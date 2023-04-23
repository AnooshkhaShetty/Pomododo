import { auth, signInWithGoogle } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';

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
            <button onClick={() =>{signInWithGoogle()}}> Login </button>
            <h1>{localStorage.getItem("name")}</h1>
            <img src = {localStorage.getItem("photoURL")} />
        </div>
    );
}

export default Login;
