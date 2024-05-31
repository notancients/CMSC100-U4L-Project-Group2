import React from 'react';
import SalesReport from './SalesReport';
import '../Styles/SalesPage.css';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import { Link } from 'react-router-dom';
import CustomCursor from '../../components/customCursor';



const SalesPage = () => {

  return (
    <div className="sales-report-page">
                   <CustomCursor />

       <div className="logo">
                <Link to="/"> 
                    <img src={logo} alt="Logo Here" className="logo-img" />
                </Link>
            </div> 
            <div className="nav-bar">
                <Link to="/userList" className="nav-link">USERS</Link>
                <Link to="/productlisting" className="nav-link">PRODUCTS</Link>
                <Link to="/orderfulfillment" className="nav-link">ORDERS</Link>
                <Link to="/sales" className="nav-link">SALES</Link>
                <Link to="/profile" className="user-profile">
                    <img src={userIcon} alt="Icon" className="user-icon"/>
                </Link>
            </div>
            <div className="title-container">
              <h1>Sales Report</h1>
            </div>
            <div className='sales-container'>
            <SalesReport showQuantity={false} className="per-sales"/>
            </div>
            </div>
  );
}

export default SalesPage;