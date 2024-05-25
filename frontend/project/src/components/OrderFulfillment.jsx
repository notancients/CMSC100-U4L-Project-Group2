import React, { useState } from 'react';
import Menu from './Menu';
import OrderList from './OrderList';
import { sampleOrders } from './SampleOrders';

const menus = [
  { name: "Pending", url: "#pending", id: "Pending" },
  { name: "Confirmed", url: "#confirmed", id: "Confirmed" },
  { name: "Cancelled", url: "#cancelled", id: "Cancelled" },
];

function OrderFulfillment() {
  const [orders, setOrders] = useState(sampleOrders);
  const [currentTab, setCurrentTab] = useState("Pending");

  const handleConfirm = (transactionId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transactionId === transactionId ? { ...order, orderStatus: "Confirmed" } : order
      )
    );
  };

  const handleCancel = (transactionId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transactionId === transactionId ? { ...order, orderStatus: "Cancelled" } : order
      )
    );
  };

  const filteredOrders = orders.filter(order => order.orderStatus === currentTab);

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
