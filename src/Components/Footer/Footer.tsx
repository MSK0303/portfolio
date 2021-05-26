import React from 'react'
import "./Footer.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-item">@2021-2022 MSK's Portfolio Site</p>
            <GitHubIcon className="footer-item icon" />
            <TwitterIcon className="footer-item icon" />
            <LanguageIcon className="footer-item icon" />
        </div>
    )
}

export default Footer
