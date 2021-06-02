import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar:React.FC = () => {
    return (
        <div className="nav-bar">
            <Link to="/portfolio/" className="nav-link">Home</Link>
            <Link to="/portfolio/About" className="nav-link">About</Link>
            <Link to="/portfolio/Create" className="nav-link">Create</Link>
            <Link to="/portfolio/Blog" className="nav-link">Blog</Link>
            <Link to="/portfolio/Contact" className="nav-link">Contact</Link>
        </div>
    )
}

export default Navbar;
