import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} =useFirebase(); 
    return (
        <div>
            <h2>Please Login!</h2>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>GoogleSignIn</button>
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