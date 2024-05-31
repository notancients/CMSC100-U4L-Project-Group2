import React from 'react';
import '../css/aboutUs.css'; 
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="Logo Here" className="logo-img" />
        </Link>
      </div> 
      <div className="nav-bar">
        <Link to="/devs" className="nav-link">THE DEVELOPERS</Link>
        <Link to="/whatwedo" className="nav-link">WHAT WE DO</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/user-profile" className="user-profile">
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
      </div>
      <div className="title-container">
        <h1>About Us</h1>
      </div>

      <div className='content-about'>
      <p>
        Our e-commerce platform is dedicated to supporting the "farm-to-table" movement, which emphasizes a direct connection between consumers and farmers. We believe in fostering a sustainable food ecosystem by facilitating transactions between farmers and customers, eliminating unnecessary middlemen.
      </p>
      <p>
        With our platform, farmers partnered with the Department of Agriculture (DA) can showcase their products directly to consumers, ensuring fair prices and transparency in the supply chain. Customers can browse through a catalog of fresh produce, meats, dairy, and more, knowing exactly where their food comes from.
      </p>
      <p>
        By choosing to shop with us, you're not just buying groceries—you're supporting local farmers, promoting environmental sustainability, and enjoying the freshest, highest-quality ingredients for your table.
      </p>
      <p className='last'>
        Thank you for being a part of our mission to reshape the way we consume food, one purchase at a time.
      </p>
      </div>
    </div>
  );
};

export default AboutPage;
