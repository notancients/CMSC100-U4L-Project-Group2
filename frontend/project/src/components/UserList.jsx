import React from 'react';
import UserCard from './UserCard';

const users = [
  { firstName: "John", middleName: "Alexander", lastName: "Doe", email: "john.doe@example.com" },
  { firstName: "Jane", middleName: "", lastName: "Smith", email: "jane.smith.averylongemailaddress@example.com" },
  { firstName: "Michael", middleName: "Brian", lastName: "Johnson", email: "michael.johnson@example.com" },
  { firstName: "Emily", middleName: "Charlotte", lastName: "Davis", email: "emily.davis@example.com" },
  { firstName: "William", middleName: "", lastName: "Brown", email: "william.brown@example.com" },
];

const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
