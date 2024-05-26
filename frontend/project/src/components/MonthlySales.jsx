import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { sampleSalesData } from './SampleSales';

const MonthlySales = () => {
  const { id: productId } = useParams();

  // mock monthly sales data for multiple products
  const monthlySalesData = [
    { _id: '1', sales: Array.from({ length: 31 }, (_, index) => index + 1) },
    { _id: '2', sales: Array.from({ length: 31 }, (_, index) => index + 1) },
    // add more data for other products
  ];

  const product = sampleSalesData.find(item => item._id === productId);
  const productSalesData = monthlySalesData.find(data => data._id === productId);

  if (!product || !productSalesData) {
    return <p>Product not found</p>;
  }

  const totalQuantitySold = productSalesData.sales.reduce((total, quantity) => total + quantity, 0);
  const totalGrossIncome = totalQuantitySold * product.price;

  return (
    <div className="sales-report">
      <Link to="/" className="back-button">Back</Link>
      <h2>{product.product_name} Monthly Sales</h2>
      <div className="card">
        <h3>{product.product_name}</h3>
        <div className="totals">
          <p>Total Quantity Sold: {totalQuantitySold}</p>
          <p>Total Gross Income: ${totalGrossIncome.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default MonthlySales;
