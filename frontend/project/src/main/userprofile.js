import '../css/whatWeDo.css'; 
import CustomCursor from '../components/customCursor';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';

import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  }

  render() {
    return (
        
      <div className="what-we-do-page">
      <CustomCursor />
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
        <h1>TO BE IMPLEMENTED</h1>
      </div>
      <div className='prof-details'>
        <div>
          <label>Name:</label>
          <p>{this.state.name}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{this.state.email}</p>
        </div>
        <div>
          <label>Bio:</label>
          <p>{this.state.bio}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfilePage;
