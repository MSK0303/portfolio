import React from 'react'
import Footer from '../Footer/Footer';
import MyIcon from '../Parts/MyIcon';
import "./Home.scss";

const Top:React.FC = () => {
    return (
        <div className="home-page">
            <div className="top" >
                <p className="top-label">Welcome to MSK's Portfolio Site</p>
            </div>
            <MyIcon />
            <p className="top-message">I'm <span className="role">Engineer</span>.</p>
            <Footer />
        </div>
    )
}

export default Top;
