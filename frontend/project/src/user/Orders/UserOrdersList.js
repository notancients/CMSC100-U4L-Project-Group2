import React, { useState } from 'react';

const UserOrdersList = ({ orders, handleCancel, currentTab }) => {
  const [visibleOrderId, setVisibleOrderId] = useState(null);

  const toggleDetails = (orderId) => {
    setVisibleOrderId(visibleOrderId === orderId ? null : orderId);
  };

  return (
    <div className="user-order-list">
      {orders.map(order => (
        <div className="user-order-card" key={order._id}>
          <div className="order-info">
            <div>
              <span className="label">Transaction ID:</span> {order._id}
            </div>
            {order.order && order.order.map((item, index) => (
              <div key={index}>
                <div>
                  <span className="label">Product ID:</span> {item.product_id}
                </div>
              </div>
            ))}
            <div className='show-button'>
            <button onClick={() => toggleDetails(order._id)}>
              {visibleOrderId === order._id ? 'Hide Details' : 'Show Details'}
            </button>
            </div>
            {visibleOrderId === order._id && (
              <div className="order-details">
                {order.order.map((item, index) => (
                  <div key={index}>
                    <div><span className="label">Order Quantity:</span> {item.product_quantity}</div>
                  </div>
                ))}
                <div><span className="label">Date Ordered:</span> {new Date(order.createdAt).toLocaleDateString()}</div>
                <div><span className="label">Time:</span> {new Date(order.createdAt).toLocaleTimeString()}</div>
              </div>
            )}
          </div>
          {currentTab === 1 && handleCancel && (
            <button className='user-action-button' onClick={() => handleCancel(order._id)}>Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserOrdersList;
