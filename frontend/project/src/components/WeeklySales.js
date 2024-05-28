import React from 'react';
import '../css/SalesPage.css';

const WeeklySalesModal = ({ product, salesData, onClose }) => {
  if (!product || !salesData) {
    return <p>Product not found</p>;
  }

  const totalQuantitySold = salesData.reduce((total, quantity) => total + quantity, 0);
  const totalGrossIncome = totalQuantitySold * product.price;

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in"> {/* Apply fade-in class */}
        <button className="close-button" onClick={onClose}>×</button>
        <div className='modal-header'>
          <h2>{product.product_name} Weekly Sales</h2>
        </div>
        <div className="modal-card">
          <div className="totals">
            <p>Total Quantity Sold: {totalQuantitySold}</p>
            <p>Total Gross Income: ${totalGrossIncome.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySalesModal;
