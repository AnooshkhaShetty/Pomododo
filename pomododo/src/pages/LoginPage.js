import { signInWithGoogle } from "../Firebase"

function Login(){
    return (
        <div className="Login">
            <h1> Welcome to Pomododo</h1>
            <button onClick={signInWithGoogle}> Login </button>
            <h1>{localStorage.getItem("name")}</h1>
            <img src = {localStorage.getItem("photoURL")} />
        </div>
    );
}

export default Login;