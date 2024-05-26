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

  const handleConfirm = (transaction_id) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transaction_id === transaction_id ? { ...order, order_status: "Confirmed" } : order
      )
    );
  };

  const handleCancel = (transaction_id) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transaction_id === transaction_id ? { ...order, order_status: "Cancelled" } : order
      )
    );
  };

  const filteredOrders = orders.filter(order => order.order_status === currentTab);

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
