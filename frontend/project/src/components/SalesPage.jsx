import React, { useState } from 'react';
import Menu from './Menu';
import SalesReport from './SalesReport';
import { sampleSalesData } from './SampleSales';

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
    <div>
      <header>
        <h1>Sales Report</h1>
        <Menu menus={menus} setCurrentTab={setCurrentTab} />
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
      <SalesReport salesData={getFilteredData()} currentTab={currentTab} />
    </div>
  );
}

export default SalesPage;
