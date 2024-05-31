import React from 'react';

const OrderList = ({ orders, handleConfirm, handleCancel }) => {
  return (
    <div className="order-list">
      {orders.map(order => (
        <div className="order-card" key={order._id}>
          <div className="order-info">
            <div><span className="label">Transaction ID:</span> {order._id}</div>
            {order.order && order.order.map((item, index) => (
              <div key={index}>
                <div><span className="label">Product ID:</span> {item.product_id}</div>
                <div><span className="label">Order Quantity:</span> {item.product_quantity}</div>
              </div>
            ))}
            <div><span className="label">Date Ordered:</span> {new Date(order.createdAt).toLocaleDateString()}</div>
            <div><span className="label">Time:</span> {new Date(order.createdAt).toLocaleTimeString()}</div>
          </div>
          {order.order_status === "Pending" && (
            <div className="action-buttons">
              <button className='confirm' onClick={() => handleConfirm(order._id)}>Confirm</button>
              <button className='cancel' onClick={() => handleCancel(order._id)}>Cancel</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderList;
