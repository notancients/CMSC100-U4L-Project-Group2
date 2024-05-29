import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/loginPage.css';
import logo from '../images/Logo.png';
import customCursorImage from '../images/corn_cursor.png'; 
import customCursorHoverImage from '../images/corn_cursor_hover.png';
import axios from 'axios'; // Import Axios

function LoginPage({ userType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      const { success, data, message } = response.data;

      if (success) {
        localStorage.setItem('token', data.token);

        if (data.user_type === 'admin') {
          navigate('/admin');
        } else {
          navigate('/loginlanding');
        }
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in.');
    }
  };


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

  useEffect(() => {
    const updateCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
  
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.top = e.clientY - 10 + 'px'; 
      ripple.style.left = e.clientX - 10 + 'px'; 
      document.body.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 1000); 
    };
  
    document.addEventListener('mousemove', updateCursor);
  
    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);


  return (
    <div className="login-page">
      <div className="custom-cursor" style={{ cursor: 'none' }}>
        <img src={customCursorImage} alt="Custom Cursor" />
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
      <div className="box">
        <div className="input-container">
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
          <i className="fas fa-envelope input-icon"></i>
        </div>
        <div className="input-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock input-icon"></i>
        </div>
        <div className="btn-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="signup-link">
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="signup-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ fontStyle: 'italic' }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
