import React, { useState } from 'react';
import Menu from './Menu';
import UserOrdersList from './UserOrdersList';
import '../css/user_orders.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import CustomCursor from './customCursor';
import axios from "axios";


const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Completed", url: "#completed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
];

function UserOrdersPage({ cart}) {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

//   useEffect( () => {
//     const fetch_data = async () => {
//         try {
//             const response = await axios.get("http://192.168.1.116:3001/api/get-all-user-transactions");
//             console.log(response.data.data);
//             setOrders(response.data.data);
//         } catch (err) {
//             console.log(err);
//             setOrders([]);
//         }
//     }

//     fetch_data();
// }, []);


  const handleCancel = (transactionId) => {
    // try {
    //   const response = axios.patch('http://192.168.1.116:3001/api/user-cancel-order', {
    //     order_id : transactionId
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transactionId === transactionId ? { ...order, orderStatus: "Cancelled" } : order
      )
    );
  };

  const filteredOrders = orders.filter(order => 
    (currentTab === 1 && order.orderStatus === "Pending") || 
    (currentTab === 2 && order.orderStatus === "Completed") || 
    (currentTab === 3 && order.orderStatus === "Cancelled")
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
              <Link to="/about" className="nav-link">ABOUT US</Link>
              <Link to="/user-profile" className="user-profile">
              <img src={userIcon} alt="User icon" className="user-icon" />
              </Link>
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