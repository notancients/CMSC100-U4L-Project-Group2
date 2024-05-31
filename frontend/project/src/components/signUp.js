import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/signupPage.css';
import logo from '../images/Logo.png';
import CustomCursor from '../components/customCursor';


let HEADER = {
  headers: {
      'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/create-user', {
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email,
        password,
      }, HEADER);
      const { success, message } = response.data;

      if (success) {
        navigate('/login/user');
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up.');
    }
  };

  

  return (
    <div className="signup-page">
                        <CustomCursor />

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
        <div className="input-container-signup">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>First Name</label>
          <i className="fas fa-user input-icon"></i>
        </div>
        <div className="input-container-signup">
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <label>Middle Name</label>
          <i className="fas fa-user input-icon"></i>
        </div>
        <div className="input-container-signup">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label>Last Name</label>
          <i className="fas fa-user input-icon"></i>
        </div>
        <div className="input-container-signup">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
          <i className="fas fa-envelope input-icon"></i>
        </div>
        <div className="input-container-signup">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock input-icon"></i>
        </div>
        <div className="btn-container-signup">
          <button type="submit" className="btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <div className="signin-link">
          <p className="text-center-signup">
            Already have an account?{' '}
            <Link
              to="/login/user"
              className="signin-link"
              style={{ fontStyle: 'italic' }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
