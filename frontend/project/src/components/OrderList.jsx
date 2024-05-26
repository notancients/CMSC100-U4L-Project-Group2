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
            <tr key={order.transaction_id}>
              <td>{order.transaction_id}</td>
              <td>{order._id}</td>
              <td>{order.quantity_sold}</td>
              <td>{order.order_status}</td>
              <td>{order.email}</td>
              <td>{order.date_sold}</td>
              <td>{order.time}</td>
              <td>
                {order.order_status === "Pending" && (
                  <>
                    <button onClick={() => handleConfirm(order.transaction_id)}>Confirm</button>
                    <button onClick={() => handleCancel(order.transaction_id)}>Cancel</button>
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
