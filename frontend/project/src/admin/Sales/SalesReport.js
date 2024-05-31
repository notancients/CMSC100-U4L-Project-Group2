import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnnualSales from './AnnualSales';
import MonthlySalesModal from './MonthlySales';
import WeeklySalesModal from './WeeklySales';

let HEADER = {
  headers: {
      'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

const SalesReport = () => {
  const [isAnnualModalOpen, setAnnualModalOpen] = useState(false);
  const [isMonthlyModalOpen, setMonthlyModalOpen] = useState(false);
  const [isWeeklyModalOpen, setWeeklyModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/get-all-products', HEADER)
      .then(response => {
        setSalesData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

  const openModal = async (productId, timePeriod) => {
    console.log(`Opening ${timePeriod} modal data.`);

    try {
      const modalResponse = await axios.get(`http://localhost:3001/api/sales-report?product_id=${productId}&time_period=${timePeriod}`,
      HEADER);

      let data = modalResponse.data.data;

      console.log(data);
      setModalData({
        product: salesData.find(product => product._id === productId),
        total_sales: data.total_sales,
        total_sold: data.total_sold
      });

      if (timePeriod === "Year") {
        setAnnualModalOpen(true);
      } else if (timePeriod === "Month") {
        setMonthlyModalOpen(true);
      } else if (timePeriod === "Week") {
        setWeeklyModalOpen(true);
      }
    } catch (error) {
      console.error(`Error fetching ${timePeriod} modal data:`, error);
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
          {salesData.map(product => (
            <div key={product._id} className="card">
              <h3>{product.product_name}</h3>
              <div className='sales-links'>
                <button className="sales-button" onClick={() => openModal(product._id, "Week")}>Weekly</button>
                <button className="sales-button" onClick={() => openModal(product._id, "Month")}>Monthly</button>
                <button className="sales-button" onClick={() => openModal(product._id, "Year")}>Annual</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isAnnualModalOpen && <AnnualSales data={modalData} onClose={closeModal} />}
      {isMonthlyModalOpen && <MonthlySalesModal data={modalData}  onClose={closeModal} />}
      {isWeeklyModalOpen && <WeeklySalesModal data={modalData} onClose={closeModal} />}
    </div>
  );
};

export default SalesReport;
