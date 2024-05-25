import React, { useState } from 'react';
import Menu from './Menu';
import OrderList from './OrderList';
import '../css/OrderFulfillment.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import { Link } from 'react-router-dom';


const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Confirmed", url: "#confirmed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
];

const sampleOrders = [
  { transactionId: "TXN12345", productId: "PRD001", orderQuantity: 2, orderStatus: 0, email: "user1@example.com", dateOrdered: "2024-05-10", time: "14:30:00" },
  { transactionId: "TXN12346", productId: "PRD002", orderQuantity: 1, orderStatus: 1, email: "user2@example.com", dateOrdered: "2024-05-11", time: "09:15:00" },
  { transactionId: "TXN12347", productId: "PRD003", orderQuantity: 5, orderStatus: 2, email: "user3@example.com", dateOrdered: "2024-05-12", time: "16:45:00" },
  { transactionId: "TXN12348", productId: "PRD004", orderQuantity: 3, orderStatus: 0, email: "user4@example.com", dateOrdered: "2024-05-13", time: "12:00:00" },
];

function OrderFulfillment() {
  const [orders, setOrders] = useState(sampleOrders);
  const [currentTab, setCurrentTab] = useState(1);

  const handleConfirm = (transactionId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transactionId === transactionId ? { ...order, orderStatus: 1 } : order
      )
    );
  };

  const handleCancel = (transactionId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transactionId === transactionId ? { ...order, orderStatus: 2 } : order
      )
    );
  };

  const filteredOrders = orders.filter(order => 
    (currentTab === 1 && order.orderStatus === 0) || 
    (currentTab === 2 && order.orderStatus === 1) || 
    (currentTab === 3 && order.orderStatus === 2)
  );

  return (
    <div className="order-fulfillment-page">
       <div className="logo">
                <Link to="/"> 
                    <img src={logo} alt="Logo Here" className="logo-img" />
                </Link>
            </div> 
            <div className="nav-bar">
                <Link to="/userList" className="nav-link">USERS</Link>
                <Link to="/productlisting" className="nav-link">PRODUCTS</Link>
                <Link to="/orderfulfillment" className="nav-link">ORDERS</Link>
                <Link to="/sales" className="nav-link">SALES</Link>
                <Link to="/profile" className="user-profile">
                    <img src={userIcon} alt="Icon" className="user-icon"/>
                </Link>
            </div>
            <div className="title-container">
              <h1>Order Fulfillment</h1>
            </div>
            <div className="menu-container">
            <Menu menus={menus} setCurrentTab={setCurrentTab} currentTab={currentTab} />
            </div>
            <div className="content-container">
              <OrderList orders={filteredOrders} handleConfirm={handleConfirm} handleCancel={handleCancel} className="orders" />
            </div>
    </div>
  );
}

export default OrderFulfillment;
