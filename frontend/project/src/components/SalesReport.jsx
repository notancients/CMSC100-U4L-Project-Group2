import React from 'react';

const SalesReport = ({ salesData, currentTab }) => {
  const totalSales = salesData.reduce((total, item) => total + item.sales, 0);
  const totalQuantitySold = salesData.reduce((total, item) => total + item.quantitySold, 0);

  return (
    <div className="sales-report">
      <h2>{currentTab === 1 ? "Weekly Sales" : currentTab === 2 ? "Monthly Sales" : "Annual Sales"}</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity Sold</th>
            <th>{currentTab === 1 ? "Weekly Sales" : currentTab === 2 ? "Monthly Sales" : "Annual Sales"}</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.quantitySold}</td>
              <td>{item.sales}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total</strong></td>
            <td></td>
            <td><strong>{totalQuantitySold}</strong></td>
            <td><strong>{totalSales}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;
