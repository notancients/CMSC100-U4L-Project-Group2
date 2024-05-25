import React from 'react';

const OrderList = ({ orders, handleConfirm, handleCancel }) => {
  return (
    <div className="order-list">
      <h2>Orders</h2>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.transactionId}>
              <td>{order.transactionId}</td>
              <td>{order.productId}</td>
              <td>{order.orderQuantity}</td>
              <td>{order.orderStatus === 0 ? 'Pending' : order.orderStatus === 1 ? 'Confirmed' : 'Canceled'}</td>
              <td>{order.email}</td>
              <td>{order.dateOrdered}</td>
              <td>{order.time}</td>
              <td>
                {order.orderStatus === 0 && (
                  <>
                    <button onClick={() => handleConfirm(order.transactionId)}>Confirm</button>
                    <button onClick={() => handleCancel(order.transactionId)}>Cancel</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
