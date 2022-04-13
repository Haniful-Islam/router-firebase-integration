import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user} = useFirebase();
    return (
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="products">Products</Link>
            <Link to ="review">Review</Link>
            <Link to ="register">Register</Link>
            {
                user.uid ?
                <button>sign out</button>
                :
                <Link to ="login">Login</Link>
            }
        </nav>
    );
};

export default Header;