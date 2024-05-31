import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import '../css/developersscreen.css';
import CustomCursor from '../components/customCursor';


// Sample data of developers
const developers = [
  {
    id: 1,
    name: "Erjoy Robles",
    skills: ["Python", "C", "JavaScript", "Solidity", "Java", "R", "NodeJS"],
    description: "Passionate developer with expertise in building web applications using modern technologies.",
    role: "Backend na medyo frontend"
  },
  {
    id: 2,
    name: "Kath Leoncio",
    skills: ["depende sa mood"],
    description: "Experienced Python developer specializing in backend development and data analysis.",
    role: "Frontend, UI/UX"

  },
  {
    id: 3,
    name: "Jerico Sanchez",
    skills: ["Java", "Spring Boot", "Hibernate"],
    description: "Full-stack developer with a focus on Java technologies and microservices architecture.",
    role: "Frontend"

  },
  {
    id: 4,
    name: "Angelica Jacob",
    skills: ["Java", "Spring Boot", "Hibernate"],
    description: "Full-stack developer with a focus on Java technologies and microservices architecture.",
    role: "Frontend"
  }
];

// Developer component
const Developer = ({ name, skills, description, role }) => (
  <div className="developer">
    <h2>{name}</h2>
    <div className='role'>
        {role}
    </div>
    <p><strong>Skills:</strong> {skills.join(", ")}</p>
    <p>{description}</p>
  </div>
);

// Developers screen component
const DevelopersScreen = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className='dev-page'>
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
      <h1>Meet Our Developers</h1>
      </div>
      <div className="developers-screen">
          {developers.map(developer => (
            <Developer
              key={developer.id}
              name={developer.name}
              role={developer.role}

              skills={developer.skills}
              description={developer.description}
            />
          ))}
      </div>
    </div>
  );
}

export default DevelopersScreen;
