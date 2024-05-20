import React, { useState } from 'react';
import Menu from './Menu';
import OrderList from './OrderList';
import { useNavigate } from 'react-router-dom';

const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Confirmed", url: "#confirmed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
  { name: "Orders", url: "/orders", id: 4 },
];

function OrderFulfillment({ orders, updateOrders }) {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const handleConfirm = (transactionId) => {
    const updatedOrders = orders.map(order =>
      order.transactionId === transactionId ? { ...order, orderStatus: 1 } : order
    );
    updateOrders(updatedOrders);
  };

  const handleCancel = (transactionId) => {
    const updatedOrders = orders.map(order =>
      order.transactionId === transactionId ? { ...order, orderStatus: 2 } : order
    );
    updateOrders(updatedOrders);
  };

  const filteredOrders = orders.filter(order => 
    (currentTab === 1 && order.orderStatus === 0) || 
    (currentTab === 2 && order.orderStatus === 1) || 
    (currentTab === 3 && order.orderStatus === 2)
  );

  return (
    <div>
      <header>
        <h1>Order Fulfillment</h1>
        <Menu menus={menus} setCurrentTab={setCurrentTab} />
      </header>
      <main>
        <OrderList orders={filteredOrders} handleConfirm={handleConfirm} handleCancel={handleCancel} />
      </main>
    </div>
  );
}

export default OrderFulfillment;