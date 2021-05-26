import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar:React.FC = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Create" className="nav-link">Create</Link>
            <Link to="/Blog" className="nav-link">Blog</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
        </div>
    )
}

export default Navbar;
