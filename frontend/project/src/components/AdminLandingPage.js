import React from 'react';
import { Link } from 'react-router-dom';
import '../css/adminlanding.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import listingMenu from '../images/listing.png';
import accountsMenu from '../images/accounts.png';
import pendingMenu from '../images/pending.png';
import salesMenu from '../images/sales.png';

function AdminLandingPage() {
  return (
    <div className="admin-page">
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
      <div className="menu1">
        <Link to="/productlisting">
        <img src={listingMenu} alt="Listing" className="listing" />
        </Link>
        <Link to="/accounts">
        <img src={accountsMenu} alt="Accounts" className="accounts" />
        </Link>
      </div>
      <div className="menu2">
        <Link to="/orderfulfillment">
        <img src={pendingMenu} alt="Pending" className="pending" />
        </Link>
        <Link to="/sales">
        <img src={salesMenu} alt="Sales" className = "sales" />
        </Link>
      </div>
  </div>
  );
}

export default AdminLandingPage;
