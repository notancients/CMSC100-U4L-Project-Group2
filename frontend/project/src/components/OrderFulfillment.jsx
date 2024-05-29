import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import OrderList from './OrderList';
import '../css/OrderFulfillment.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import { Link } from 'react-router-dom';
import CustomCursor from './customCursor';

const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Completed", url: "#completed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
];

function OrderFulfillment() {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/get-all-transactions");
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
  }, []);

  const handleConfirm = async (_id) => {
    try {
      const response = await axios.patch("http://localhost:3001/api/admin-validate-order", {
        order_id: _id,
        order_status: "Completed"
      });

      if (response.data.success) {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === _id ? { ...order, order_status: "Completed" } : order
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = async (_id) => {
    try {
      const response = await axios.patch("http://localhost:3001/api/admin-validate-order", {
        order_id: _id,
        order_status: "Cancelled"
      });

      if (response.data.success) {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === _id ? { ...order, order_status: "Cancelled" } : order
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
    <div className="order-fulfillment-page">
      <CustomCursor />
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
          <img src={userIcon} alt="Icon" className="user-icon" />
        </Link>
      </div>
      <div className="title-container">
        <h1>Order Fulfillment</h1>
      </div>
      <div className="menu-container">
        <Menu menus={menus} setCurrentTab={setCurrentTab} currentTab={currentTab} />
      </div>
      <div className="content-container">
        <OrderList orders={filteredOrders} handleConfirm={handleConfirm} handleCancel={handleCancel} />
      </div>
    </div>
  );
}

export default OrderFulfillment;
