import { signInWithGoogle } from "../Firebase"
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
    return (
        <div className="Login">
            <h1> Welcome to Pomododo</h1>
            <button onClick={() =>{signInWithGoogle(); navigate("/selectmethod");}}> Login </button>
            <h1>{localStorage.getItem("name")}</h1>
            <img src = {localStorage.getItem("photoURL")} />
        </div>
    );
}


export default Login;