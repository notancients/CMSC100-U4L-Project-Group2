import React from 'react';

const UserOrdersList = ({ orders, handleCancel, currentTab }) => {
  return (
    <div className="order-list">
      <h2>{currentTab === 1 ? "Pending Orders" : currentTab === 2 ? "Completed Orders" : "Cancelled Orders"}</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Product ID</th>
            <th>Order Quantity</th>
            <th>Order Status</th>
            <th>Email</th>
            <th>Date Ordered</th>
            <th>Time</th>
            {currentTab === 1 && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.transaction_id}>
              <td>{order.transaction_id}</td>
              <td>{order._id}</td>
              <td>{order.quantity_sold}</td>
              <td>{order.order_status}</td>
              <td>{order.email}</td>
              <td>{order.date_sold}</td>
              <td>{order.time}</td>
              {currentTab === 1 && (
                <td>
                  <button onClick={() => handleCancel(order.transaction_id)}>Cancel</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserOrdersList;
