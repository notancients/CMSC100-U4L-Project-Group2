import React from 'react';

const OrderList = ({ orders, handleConfirm, handleCancel }) => {
  return (
    <div className="order-list">
      {orders.map(order => (
        <div className="order-card" key={order.transactionId}>
           <div className="order-info">
            <div><span className="label">Transaction ID:</span> {order.transactionId}</div>
            <div><span className="label">Product ID:</span> {order.productId}</div>
            <div><span className="label">Order Quantity:</span> {order.orderQuantity}</div>
            <div><span className="label">Email:</span> {order.email}</div>
            <div><span className="label">Date Ordered:</span> {order.dateOrdered}</div>
            <div><span className="label">Time:</span> {order.time}</div>
          </div>
          {order.orderStatus === 0 && (
            <div className="action-buttons" >
              <button className='confirm' onClick={() => handleConfirm(order.transactionId)}>Confirm</button>
              <button className='cancel' onClick={() => handleCancel(order.transactionId)}>Cancel</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderList;
