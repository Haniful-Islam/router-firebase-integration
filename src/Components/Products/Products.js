import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
const auth =  getAuth(app);

const Products = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
     return (
        <div>
            <h2>Show all products</h2>
            <h4>{user? user.displayName: "No body"}</h4>
        </div>
    );
};

export default Products;