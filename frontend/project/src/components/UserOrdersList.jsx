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
            <tr key={order.transactionId}>
              <td>{order.transactionId}</td>
              <td>{order.productId}</td>
              <td>{order.orderQuantity}</td>
              <td>{order.orderStatus}</td>
              <td>{order.email}</td>
              <td>{order.dateOrdered}</td>
              <td>{order.time}</td>
              {currentTab === 1 && (
                <td>
                  <button onClick={() => handleCancel(order.transactionId)}>Cancel</button>
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
