import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
const auth = getAuth(app);
const Home = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is home</h2>
            <h4>Current user:{user? user.displayName: 'No Body'}</h4>
        </div>
    );
};

export default Home;