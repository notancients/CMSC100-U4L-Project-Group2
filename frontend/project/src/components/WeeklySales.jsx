import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { sampleSalesData } from './SampleSales';

const WeeklySales = () => {
  const { id: productId } = useParams();

  // mock weekly sales data for multiple products
  const weeklySalesData = [
    { id: '1', sales: [7, 2, 3, 1, 0, 5, 7] },
    { id: '2', sales: [3, 4, 2, 5, 6, 3, 4] },
    // add more data for other products
  ];

  const product = sampleSalesData.find(item => item.id === productId);
  const productSalesData = weeklySalesData.find(data => data.id === productId);

  if (!product || !productSalesData) {
    return <p>Product not found</p>;
  }

  const totalQuantitySold = productSalesData.sales.reduce((total, quantity) => total + quantity, 0);
  const totalGrossIncome = totalQuantitySold * product.price;

  return (
    <div className="sales-report">
      <Link to="/" className="back-button">Back</Link>
      <h2>{product.productName} Weekly Sales</h2>
      <div className="card">
        <h3>{product.productName}</h3>
        <div className="totals">
          <p>Total Quantity Sold: {totalQuantitySold}</p>
          <p>Total Gross Income: ${totalGrossIncome.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default WeeklySales;
