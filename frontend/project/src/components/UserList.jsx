import React from 'react';
import UserCard from './UserCard';
import userSampleData from './userSampleData';

const UserList = () => {
  const users = userSampleData();

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          user={{
            firstName: user.first_name,
            middleName: user.middle_name,
            lastName: user.last_name,
            email: user.email
          }}
        />
      ))}
    </div>
  );
}

export default UserList;
