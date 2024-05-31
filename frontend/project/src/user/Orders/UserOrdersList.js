import React from 'react';

const UserOrdersList = ({ orders, handleCancel, currentTab }) => {
  return (
    <div className="user-order-list">
      {orders.map(order => (
        <div className="user-order-card" key={order._id}>
          <div className="order-info">
            <p>{order.product_name}</p>
            <p>Product ID: {order.product_id}</p>
            <p>Order Quantity: {order.order_quantity}</p>
            <p>Date Ordered: {order.date_ordered}</p>
          </div>
          {currentTab !== 3 && handleCancel && ( // Check if not on Cancelled tab
            <button className="user-action-button" onClick={() => handleCancel(order._id)}>Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserOrdersList;