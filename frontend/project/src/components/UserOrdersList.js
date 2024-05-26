import React from 'react';

const UserOrdersList = ({ orders, handleCancel, currentTab }) => {
  return (
    <div className="user-order-list">
      {orders.map(order => (
        <div className="user-order-card" key={order.transactionId}>
          <div className="order-info">
            <p>{order.productName}</p>
          <p>Product ID: {order.productId}</p>
          <p>Order Quantity: {order.orderQuantity}</p>
          <p>Date Ordered: {order.dateOrdered}</p>
          </div>
          {currentTab !== 3 && handleCancel && ( // Check if not on Cancelled tab
            <button className="user-action-button" onClick={() => handleCancel(order.transactionId)}>Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserOrdersList;
