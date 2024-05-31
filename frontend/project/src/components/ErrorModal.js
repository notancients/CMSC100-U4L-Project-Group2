import React from 'react';

function ErrorModal({ message, onClose }) {
  return (
    <div className="modal-alert">
      <div className="modal-content-alert">
        <span className="close-alert" onClick={onClose}>&times;</span>
        <h1>UH OH!</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorModal;
