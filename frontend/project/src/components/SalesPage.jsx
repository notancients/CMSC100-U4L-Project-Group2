// SalesPage.js
import React, { useState } from 'react';
import Menu from './Menu';
import SalesReport from './SalesReport';

const menus = [
  { name: "All Products", url: "#", id: 1 },
];

const initialSalesData = [
  { id: '1', productName: "Product A", quantitySold: 120, price: 2400, weeklySales: 600, monthlySales: 2400, annualSales: 28800 },
  { id: '2', productName: "Product B", quantitySold: 80, price: 1600, weeklySales: 400, monthlySales: 1600, annualSales: 19200 },
  { id: '3', productName: "Product C", quantitySold: 200, price: 4000, weeklySales: 800, monthlySales: 3200, annualSales: 38400 },
  { id: '4', productName: "Product D", quantitySold: 150, price: 3000, weeklySales: 750, monthlySales: 3000, annualSales: 36000 },
  { id: '5', productName: "Product E", quantitySold: 90, price: 1800, weeklySales: 450, monthlySales: 1800, annualSales: 21600 },
  { id: '6', productName: "Product F", quantitySold: 180, price: 3600, weeklySales: 900, monthlySales: 3600, annualSales: 43200 },
  { id: '7', productName: "Product G", quantitySold: 210, price: 4200, weeklySales: 1050, monthlySales: 4200, annualSales: 50400 },
  { id: '8', productName: "Product H", quantitySold: 100, price: 2000, weeklySales: 500, monthlySales: 2000, annualSales: 24000 },
  { id: '9', productName: "Product I", quantitySold: 50, price: 1000, weeklySales: 250, monthlySales: 1000, annualSales: 12000 },
  { id: '10', productName: "Product J", quantitySold: 300, price: 6000, weeklySales: 1500, monthlySales: 6000, annualSales: 72000 },
  { id: '11', productName: "Product K", quantitySold: 130, price: 2600, weeklySales: 650, monthlySales: 2600, annualSales: 31200 },
  { id: '12', productName: "Product L", quantitySold: 70, price: 1400, weeklySales: 350, monthlySales: 1400, annualSales: 16800 },
  { id: '13', productName: "Product M", quantitySold: 250, price: 5000, weeklySales: 1250, monthlySales: 5000, annualSales: 60000 },
  { id: '14', productName: "Product N", quantitySold: 180, price: 3600, weeklySales: 900, monthlySales: 3600, annualSales: 43200 },
  { id: '15', productName: "Product O", quantitySold: 190, price: 3800, weeklySales: 950, monthlySales: 3800, annualSales: 45600 },
];

const SalesPage = () => {
  const [filterId, setFilterId] = useState('');
  const [filterName, setFilterName] = useState('');
  const [salesData, setSalesData] = useState(initialSalesData);

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
    let filteredData = initialSalesData;

    if (id) {
      filteredData = filteredData.filter(item => item.id === id);
    }

    if (name) {
      filteredData = filteredData.filter(item => item.productName.toLowerCase().includes(name.toLowerCase()));
    }

    setSalesData(filteredData);
  };

  return (
    <div>
      <header>
        <h1>Sales Report</h1>
        <Menu menus={menus} />
      </header>
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
      <SalesReport salesData={salesData} />
    </div>
  );
}

export default SalesPage;
