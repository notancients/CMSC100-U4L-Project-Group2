import React, { useState, useEffect } from 'react';
import Menu from '../../admin/Transactions/Menu';
import UserOrdersList from './UserOrdersList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/user_orders.css';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import CustomCursor from '../../components/customCursor';
import { LogoutPrompt } from '../../frontend_network/authentication';


let HEADER = {
  headers: {
    'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

let user_id = localStorage.getItem("user_id");

const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Completed", url: "#completed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
];

function UserOrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    if (user_id) {
      const fetch_data = async () => {
        try {
          console.log(HEADER)
          const response = await axios.get(`http://localhost:3001/api/get-all-user-transactions?user_id=${user_id}`, HEADER);
          const allOrders = [
            ...response.data.data.pending,
            ...response.data.data.completed,
            ...response.data.data.cancelled
          ];
          setOrders(allOrders);
        } catch (err) {
          console.log(err);
          setOrders([]);
        }
      };

      fetch_data();
    }
  }, [user_id]);

  const handleCancel = async (transactionId) => {
    try {
      const response = await axios.patch("http://localhost:3001/api/user-cancel-order", { order_id: transactionId }, HEADER);

      if (response.data.success) {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === transactionId ? { ...order, order_status: "Cancelled" } : order
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filteredOrders = orders.filter(order => 
    (currentTab === 1 && order.order_status === "Pending") || 
    (currentTab === 2 && order.order_status === "Completed") || 
    (currentTab === 3 && order.order_status === "Cancelled")
  );

  return (
    <div className="user-orders-page">
      <CustomCursor />
      <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="Logo Here" className="logo-img" />
        </Link>
      </div> 
      <div className="nav-bar">
        <Link to="/userorders" className="nav-link">ORDERS</Link>
        <Link to="/userproducts" className="nav-link">PRODUCTS</Link>
        <Link to="/cart" className="nav-link">CART ({cartItemCount})</Link>
        <Link to="/user-profile" className="user-profile">
          <img src={userIcon} alt="User icon" className="user-icon" />
        </Link>
        <LogoutPrompt/>

      </div>
      <div className="title-container">
        <h1>Your Orders</h1>
      </div>
      <div className="menu-container">
        <Menu menus={menus} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      </div>
      <div className="content-container">
        <UserOrdersList orders={filteredOrders} handleCancel={handleCancel} currentTab={currentTab} className="orders" />
      </div>
    </div>
  );
}

export default UserOrdersPage;
