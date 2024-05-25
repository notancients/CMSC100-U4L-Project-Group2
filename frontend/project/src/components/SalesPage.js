import React, { useState } from 'react';
import Menu from './Menu';
import SalesReport from './SalesReport';
import { sampleSalesData } from './SampleSales';
import '../css/SalesPage.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import { Link } from 'react-router-dom';


const menus = [
  { name: "Weekly", url: "#weekly", id: 1 },
  { name: "Monthly", url: "#monthly", id: 2 },
  { name: "Annual", url: "#annual", id: 3 },
];

const SalesPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [filterId, setFilterId] = useState('');
  const [filterName, setFilterName] = useState('');
  const [salesData, setSalesData] = useState(sampleSalesData);

  const handleFilterIdChange = (event) => {
    const value = event.target.value;
    setFilterId(value);
    filterSalesData(value, filterName);
  };

  const handleFilterNameChange = (event) => {
    const value = event.target.value;
    setFilterName(value);
    filterSalesData(filterId, value);
  };

  const filterSalesData = (id, name) => {
    let filteredData = sampleSalesData;

    if (id) {
      filteredData = filteredData.filter(item => item.id === id);
    }

    if (name) {
      filteredData = filteredData.filter(item => item.productName.toLowerCase().includes(name.toLowerCase()));
    }

    setSalesData(filteredData);
  };

  const getFilteredData = () => {
    switch (currentTab) {
      case 1:
        return salesData.map(({ id, productName, quantitySold, weeklySales }) => ({ id, productName, quantitySold, sales: weeklySales }));
      case 2:
        return salesData.map(({ id, productName, quantitySold, monthlySales }) => ({ id, productName, quantitySold, sales: monthlySales }));
      case 3:
        return salesData.map(({ id, productName, quantitySold, annualSales }) => ({ id, productName, quantitySold, sales: annualSales }));
      default:
        return [];
    }
  };

  return (
    <div className="sales-report-page">
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
            <div className="menu-container">
            <Menu menus={menus} setCurrentTab={setCurrentTab} currentTab={currentTab} />
            </div>
      <div className="filters">
        <div className="filter">
          <label htmlFor="filterId">Filter by ID: </label>
          <input
            type="text"
            id="filterId"
            value={filterId}
            onChange={handleFilterIdChange}
          />
        </div>
        <div className="filter">
          <label htmlFor="filterName">Filter by Name: </label>
          <input
            type="text"
            id="filterName"
            value={filterName}
            onChange={handleFilterNameChange}
          />
        </div>
      </div>
      <h2>{currentTab === 1 ? "Weekly Sales" : currentTab === 2 ? "Monthly Sales" : "Annual Sales"}</h2>
      <SalesReport salesData={getFilteredData()} currentTab={currentTab} />
    </div>
  );
}

export default SalesPage;