import React from 'react';
import SalesReport from './SalesReport';
import { sampleSalesData } from './SampleSales';

const SalesPage = () => {
  return (
    <div>
      <header>
        <h1>Sales Report</h1>
      </header>
      <SalesReport salesData={sampleSalesData} showQuantity={false} />
    </div>
  );
}

export default SalesPage;
