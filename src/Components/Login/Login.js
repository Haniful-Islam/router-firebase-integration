import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init.js';
const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login!</h2>
            <div style={{margin:'20px'}}>
                <button onClick={() =>signInWithGoogle()}>GoogleSignIn</button>
            </div>
            <form>
                <input type="email" placeholder="Your Email"/>
                <br/>
                <input type="Password" placeholder="Your Password"/>
                <br/>
                <input type ="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;