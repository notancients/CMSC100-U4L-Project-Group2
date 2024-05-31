import React from 'react';
import '../css/whatWeDo.css'; 
import CustomCursor from '../components/customCursor';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';


const WhatWeDo = () => {
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
        <h1>What We Do</h1>
      </div>
      <div className="content-container-whatwd">
        <p className='statement'>
        As a group of passionate individuals studying computer science, we engage in various activities to enhance our skills and knowledge in the field. From attending lectures and participating in coding bootcamps to working on collaborative projects and conducting research, we are constantly immersing ourselves in the ever-evolving world of technology. Our journey in computer science is not just about acquiring theoretical knowledge but also about
        applying it in practical contexts, solving real-world problems, and making meaningful contributions to the field. Here's a glimpse into our activities and the exciting projects we're working on:
        </p>
        <div className="activities">
          <h3>1. Learning and Exploring</h3>
          <p>
            We are constantly learning and exploring new concepts in computer science, including programming languages, algorithms, data structures, and more. Whether it's through attending lectures, workshops, or self-study, we strive to deepen our understanding of technology.
          </p>
          <h3>2. Personal Projects</h3>
          <p>
            We enjoy working on personal projects to apply what we've learned and challenge ourselves creatively. From building web applications to experimenting with machine learning models, we're always tinkering with new ideas and pushing the boundaries of our skills.
          </p>
          <h3>3. Collaboration and Networking</h3>
          <p>
            We believe in the power of collaboration and enjoy working with each other on projects and problem-solving challenges. Whether it's forming study groups, participating in coding competitions, or attending tech meetups, we value the opportunity to connect with peers and learn from each other's experiences.
          </p>
          <h3>4. Career Development</h3>
          <p>
            We are focused on developing our careers in the field of computer science and actively seek out opportunities for internships, job shadowing, and networking events. We're passionate about turning our love for technology into fulfilling and impactful careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
