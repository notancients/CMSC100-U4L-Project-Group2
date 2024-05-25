import React from 'react';
import { Link } from 'react-router-dom';
import { sampleSalesData } from './SampleSales';

const SalesReport = () => {
  return (
    <div>
      <div className="navigation">
        <h2>All Products</h2>
        <div className="product-cards">
          {sampleSalesData.map(product => (
            <div key={product.id} className="card">
              <h3>{product.productName}</h3>
              <Link to={`/sales/${product.id}/weekly`} className="sales-link">Weekly Sales</Link>
              <Link to={`/sales/${product.id}/monthly`} className="sales-link">Monthly Sales</Link>
              <Link to={`/sales/${product.id}/annual`} className="sales-link">Annual Sales</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesReport;
