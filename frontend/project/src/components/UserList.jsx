import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import userSampleData from './userSampleData';
import '../css/UserList.css';
import logo from '../images/Logo.png';
import userIcon from '../images/user_icon.png';
import { Link } from 'react-router-dom';

const UserList = () => {

  const initialUsers = userSampleData().sort((a, b) => a.first_name.localeCompare(b.first_name));

  const [users, setUsers] = useState(initialUsers);
  const [sortCriteria, setSortCriteria] = useState('');
  const [userCount, setUserCount] = useState(initialUsers.length);

  useEffect(() => {
    setUserCount(users.length);
  }, [users]);

  const sortUsers = (criteria) => {
    let sortedUsers = [...users];
    switch (criteria) {
      case 'firstName':
        sortedUsers.sort((a, b) => a.first_name.localeCompare(b.first_name));
        break;
      case 'lastName':
        sortedUsers.sort((a, b) => a.last_name.localeCompare(b.last_name));
        break;
      case 'email':
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      default:
        break;
    }
    setUsers(sortedUsers);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    sortUsers(e.target.value);
  };

  return (
    <div className="user-list-page">
      <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="Logo Here" className="logo-img" />
        </Link>
      </div> 
      <div className="nav-bar">
        <Link to="/userList" className="nav-link">USERS</Link>
        <Link to="/productlisting" className="nav-link">PRODUCTS</Link>
        <Link to="/orderfulfillment" className="nav-link">ORDERS</Link>
        <Link to="/sales" className="nav-link">SALES</Link>
        <Link to="/profile" className="user-profile">
          <img src={userIcon} alt="Icon" className="user-icon"/>
        </Link>
      </div>
      <div className="title-container">
        <h1>Registered Users</h1>
      </div>
      <div className="sort-user-count-container">
        <div className="sort-container">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortCriteria} onChange={handleSortChange}>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="user-count">
          Total Users: {userCount}
        </div>
      </div>
      <div className='users'>
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
    </div>
  );
}

export default UserList;
