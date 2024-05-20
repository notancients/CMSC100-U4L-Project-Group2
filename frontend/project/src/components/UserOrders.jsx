import React, { useState } from 'react';
import Menu from './Menu';
import OrderList from './OrderList';

const menus = [
  { name: "Active", url: "#active", id: 1 },
  { name: "Completed", url: "#completed", id: 2 },
  { name: "Cancelled", url: "#cancelled", id: 3 },
  { name: "Fulfillment", url: "/", id: 4 },
];

const UserOrders = ({ orders, updateOrders }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const filteredOrders = orders.filter(order =>
    (currentTab === 1 && order.orderStatus === 1) || // Active orders
    (currentTab === 2 && order.orderStatus === 3) || // Completed orders (no data yet)
    (currentTab === 3 && order.orderStatus === 2)    // Cancelled orders
  );

  return (
    <div>
      <header>
        <h1>User Orders</h1>
        <Menu menus={menus} setCurrentTab={setCurrentTab} />
      </header>
      <main>
        <OrderList orders={filteredOrders} handleConfirm={() => {}} handleCancel={() => {}} />
      </main>
    </div>
  );
};

export default UserOrders;