import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import customCursorImage from '../images/corn_cursor.png'; 
import customCursorHoverImage from '../images/corn_cursor_hover.png';
import userIcon from '../images/user_icon.png';
import '../css/user_orders.css';


function UserOrdersPage() {

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
    <div className="user-orders-page">
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
      <Link to="/shoppingcart" className="nav-link">CART</Link>
      <Link to="/about" className="nav-link">ABOUT US</Link>
      <Link to="/user-profile" className="user-profile">
        <img src={userIcon} alt="User icon" className="user-icon" />
      </Link>
    </div>
</div>
  );
}

export default UserOrdersPage;
