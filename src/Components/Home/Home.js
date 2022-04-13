import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home</h2>
            <h4>Current user:{user? user.displayName: 'No Body'}</h4>
        </div>
    );
};

export default Home;