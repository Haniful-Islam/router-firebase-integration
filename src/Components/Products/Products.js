import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
     return (
        <div>
            <h2>Show all products</h2>
            <h4>{user? user.displayName: "No body"}</h4>
        </div>
    );
};

export default Products;