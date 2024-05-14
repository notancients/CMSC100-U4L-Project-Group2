import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landingPage.css';
import landingPageTitle from '../images/lp_title.png';
import lpLogo from '../images/lp_logo.png';
import userLoginImage from '../images/iamcustomer_button.png';
import adminLoginImage from '../images/imadmin_button.png';
import userIcon from '../images/user_icon.png';

function LandingPage() {
  return (
    <div className="lp-container">
      <div className="bokeh-overlay-lp">
        <div className="bokeh-lp"></div>
        <div className="bokeh-lp"></div>
        <div className="bokeh-lp"></div>
      </div>
      <div className="nav-bar">
        <Link to="/devs" className="nav-link">THE DEVELOPERS</Link>
        <Link to="/whatwedo" className="nav-link">WHAT WE DO</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/user-profile" className="user-profile">
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
      </div>
      <img src={lpLogo} alt="lp_logo" className="lp-logo" />
      <div className="lp-title">
        <img src={landingPageTitle} alt="Landing Page Background" />
      </div>
      <div className='button-container'>
        <Link to="/login/user">
          <img src={userLoginImage} alt="User Login" className="user-button" />
        </Link>
        <Link to="/admin">
          <img src={adminLoginImage} alt="Admin Login" className="admin-button" />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
