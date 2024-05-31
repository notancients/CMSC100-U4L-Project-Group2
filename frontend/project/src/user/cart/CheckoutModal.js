// CheckoutModal.js

import React from 'react';
import '../Styles/checkoutModal.css';

function CheckoutModal({ isOpen, onClose, onConfirm, totalPrice }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-checkout">
      <div className="modal-content-checkout">
        <h2>Confirm Checkout</h2>
        <p>Total Price: PHP {totalPrice}.00</p>
        <div className="modal-buttons-checkout">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
