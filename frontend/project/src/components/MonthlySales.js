import React from 'react';
import '../css/SalesPage.css'; 

const MonthlySalesModal = ({  data, onClose }) => {
  if (!data) return null;    
  
  const { product, sales } = data;
  const totalQuantitySold = data.total_sold;
  const totalGrossIncome = data.total_sales;

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in"> {/* Apply fade-in class */}
        <button className="close-button" onClick={onClose}>×</button>
        <div className='modal-header'>
          <h2>{product.product_name} Monthly Sales</h2>
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

export default MonthlySalesModal;
