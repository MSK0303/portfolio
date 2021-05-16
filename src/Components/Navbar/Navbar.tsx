import React from 'react';
import {Link} from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Create">Create</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar;
