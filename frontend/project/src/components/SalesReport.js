import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleSalesData } from './SampleSales';
import AnnualSales from './AnnualSales';
import MonthlySalesModal from './MonthlySales';
import WeeklySalesModal from './WeeklySales';


const SalesReport = () => {
  const [isAnnualModalOpen, setAnnualModalOpen] = useState(false);
  const [isMonthlyModalOpen, setMonthlyModalOpen] = useState(false);
  const [isWeeklyModalOpen, setWeeklyModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openAnnualModal = (productId) => {
    // populate modalData for annual sales
    const product = sampleSalesData.find(item => item._id === productId);
    const annualSalesData = [
      { _id: '1', sales: Array.from({ length: 365 }, (_, index) => index + 1) },
      { _id: '2', sales: Array.from({ length: 365 }, (_, index) => index + 1) },
      // add more data for other products
    ];
    const productSalesData = annualSalesData.find(data => data._id === productId);
    if (product && productSalesData) {
      setModalData({
        product,
        sales: productSalesData.sales
      });
      setAnnualModalOpen(true);
    }
  };


  const openMonthlyModal = (productId) => {
    // populate modalData for monthly sales
    const product = sampleSalesData.find(item => item._id === productId);
    const monthlySalesData = [
      { _id: '1', sales: Array.from({ length: 31 }, (_, index) => index + 1) },
      { _id: '2', sales: Array.from({ length: 31 }, (_, index) => index + 1) },
      // add more data for other products
    ];
    const productSalesData = monthlySalesData.find(data => data._id === productId);
    if (product && productSalesData) {
      setModalData({
        product,
        sales: productSalesData.sales
      });
      setMonthlyModalOpen(true);
    }
  };
  const openWeeklyModal = (productId) => {
    // populate modalData for weekly sales
    const product = sampleSalesData.find(item => item._id === productId);
    const weeklySalesData = [
      { _id: '1', sales: [7, 2, 3, 1, 0, 5, 7] },
      { _id: '2', sales: [3, 4, 2, 5, 6, 3, 4] },
      // add more data for other products
    ];
    const productSalesData = weeklySalesData.find(data => data._id === productId);
    if (product && productSalesData) {
      setModalData({
        product,
        sales: productSalesData.sales
      });
      setWeeklyModalOpen(true);
    }
  };

  const closeModal = () => {
    setAnnualModalOpen(false);
    setMonthlyModalOpen(false);
    setWeeklyModalOpen(false);
    setModalData(null);
  };

  return (
    <div>
      <div className="navigation">

        <div className='all-prod-title'>
          <h2>All Products</h2>
        </div>
        <div className="product-cards">
          {sampleSalesData.map(product => (
            <div key={product._id} className="card">
              <h3>{product.product_name}</h3>
              <div className='sales-links'>
              <button className="sales-button" onClick={() => openWeeklyModal(product._id)}>Weekly</button>
                <button className="sales-button" onClick={() => openMonthlyModal(product._id)}>Monthly</button>
                <button className="sales-button" onClick={() => openAnnualModal(product._id)}>Annual</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isAnnualModalOpen && <AnnualSales data={modalData} onClose={closeModal} />}
      {isMonthlyModalOpen && <MonthlySalesModal product={modalData.product} salesData={modalData.sales} onClose={closeModal} />}
      {isWeeklyModalOpen && <WeeklySalesModal product={modalData.product} salesData={modalData.sales} onClose={closeModal} />}
    </div>
  );
};

export default SalesReport;
