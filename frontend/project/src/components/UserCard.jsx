import React from 'react';

// note: middleName is optional

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.firstName} {user.middleName ? user.middleName + ' ' : ''}{user.lastName}</h3> 
      <p><strong>Email:</strong> {user.email}</p>
      <button>Go to Cart</button>
    </div>
  );
}

export default UserCard;
