import React from 'react';

const SalesReport = ({ salesData }) => {
  const totalQuantitySold = salesData.reduce((total, item) => total + item.quantitySold, 0);
  const totalWeeklySales = salesData.reduce((total, item) => total + item.weeklySales, 0);
  const totalMonthlySales = salesData.reduce((total, item) => total + item.monthlySales, 0);
  const totalAnnualSales = salesData.reduce((total, item) => total + item.annualSales, 0);

  return (
    <div className="sales-report">
      <h2>All Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity Sold</th>
            <th>Price</th>
            <th>Weekly Sales</th>
            <th>Monthly Sales</th>
            <th>Annual Sales</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.quantitySold}</td>
              <td>{item.price}</td>
              <td>{item.weeklySales}</td>
              <td>{item.monthlySales}</td>
              <td>{item.annualSales}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total</strong></td>
            <td></td>
            <td><strong>{totalQuantitySold}</strong></td>
            <td></td>
            <td><strong>{totalWeeklySales}</strong></td>
            <td><strong>{totalMonthlySales}</strong></td>
            <td><strong>{totalAnnualSales}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;
