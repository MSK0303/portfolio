import React from 'react'
import Footer from '../Footer/Footer';
import "./Home.scss";

const Top:React.FC = () => {
    return (
        <div className="home-page">
            <div className="top" >
                <p className="top-label">Welcome to MSK's Portfolio Site</p>
            </div>
            <Footer />
        </div>
    )
}

export default Top;
