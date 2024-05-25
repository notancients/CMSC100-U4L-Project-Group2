import React, { useState } from 'react';
import Menu from './Menu';
import OrderList from './OrderList';

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
