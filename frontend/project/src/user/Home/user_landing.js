import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import customCursorImage from '../../images/corn_cursor.png'; 
import customCursorHoverImage from '../../images/corn_cursor_hover.png';
import userIcon from '../../images/user_icon.png';
import '../Styles/userlanding.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';


function UserLandingPage({ cart}) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

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
    <div className="user-page">
       <div className="custom-cursor" style={{ cursor: 'none' }}>
        <img src={cursorImage} alt="Custom Cursor" />
      </div>
    <div className="logo">
    <Link to="/"> 
        <img src={logo} alt="Logo Here" className="logo-img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
      </Link>
      </div> 
    <div className="nav-bar-user" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to="/userorders" className="nav-link">ORDERS</Link>
      <Link to="/userproducts" className="nav-link">PRODUCTS</Link>
      <Link to="/cart" className="nav-link">CART ({cartItemCount})</Link>
      <Link to="/about" className="nav-link">ABOUT US</Link>
      <Link to="/user-profile" className="user-profile">
        <img src={userIcon} alt="User icon" className="user-icon" />
      </Link>
    </div>
    <div className='userlp-images'>
      <img src = {img1} alt="" className='img1'/>
      <img src = {img2} alt="" className='img2'/>
      <img src = {img3} alt="" className='img3'/>
      <img src = {img4} alt="" className='img4'/>
      <img src = {img5} alt="" className='img5'/>
    </div>
</div>
  );
}

export default UserLandingPage;
