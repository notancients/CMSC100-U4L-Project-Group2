import React from 'react';

// note: middleName is optional

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h1>{user.firstName} {user.middleName ? user.middleName + ' ' : ''}{user.lastName}</h1> 
      <p><strong></strong> {user.email}</p>
    </div>
  );
}

export default UserCard;
