import React, { useState } from 'react';
import Menu from './Menu';
import UserOrdersList from './UserOrdersList';
import { sampleOrders } from './SampleOrders';

const menus = [
  { name: "Pending", url: "#pending", id: 1 },
  { name: "Completed", url: "#completed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
];

function UserOrders() {
  const [orders, setOrders] = useState(sampleOrders);
  const [currentTab, setCurrentTab] = useState(1);

  const handleCancel = (transaction_id) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.transaction_id === transaction_id ? { ...order, order_status: "Cancelled" } : order
      )
    );
  };

  const filteredOrders = orders.filter(order => 
    (currentTab === 1 && order.order_status === "Pending") || 
    (currentTab === 2 && order.order_status === "Completed") || 
    (currentTab === 3 && order.order_status === "Cancelled")
  );

  return (
    <div>
      <header>
        <h1>User Orders</h1>
        <Menu menus={menus} setCurrentTab={setCurrentTab} />
      </header>
      <main>
        <UserOrdersList orders={filteredOrders} handleCancel={handleCancel} currentTab={currentTab} />
      </main>
    </div>
  );
}

export default UserOrders;
