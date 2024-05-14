import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signupPage.css';
import logo from '../images/Logo.png';
import customCursorImage from '../images/corn_cursor.png'; 
import customCursorHoverImage from '../images/corn_cursor_hover.png';




function SignUpPage() {
  const [cursorImage, setCursorImage] = useState(customCursorImage);

  useEffect(() => {
    const updateCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    setCursorImage(customCursorHoverImage);
  };

  const handleMouseLeave = () => {
    setCursorImage(customCursorImage);
  };

  return (
    <div className="signup-page">
    <div className="custom-cursor" style={{ cursor: 'none' }}>
        <img src={cursorImage} alt="Custom Cursor" />
      </div>
    <div className="bokeh-overlay">
        <div className="bokeh"></div>
        <div className="bokeh"></div>
        <div className="bokeh"></div>
      </div>
      <div className="logo">
      <Link to="/"> 
          <img src={logo} alt="Logo Here" className="logo-img" />
        </Link>
      </div> 
      <div className="box-signup">
      <div className="input-container-signup"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input type="name" id="name" name="name" required />
          <label>Name</label>
          <i className="fas fa-user input-icon"></i>
        </div>
        <div className="input-container-signup"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input type="email" id="email" name="email" required />
          <label>Email</label>
          <i className="fas fa-envelope input-icon"></i>
        </div>
        <div className="input-container-signup"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input type="password" id="password" name="password" required/>
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock input-icon"></i>
        </div>
        <div className="btn-container-signup"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link to="/loginlanding">
          <button type="submit" className="btn">Sign Up</button>
        </Link>
        </div>    
        
        <div className="signin-link">
        <p className="text-center-signup">
            Already have an account? <Link to="/login/user" className="signin-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ fontStyle: 'italic' }}>Sign In</Link>
          </p>
    </div>
      </div>
    </div>
  );
}

export default SignUpPage;
