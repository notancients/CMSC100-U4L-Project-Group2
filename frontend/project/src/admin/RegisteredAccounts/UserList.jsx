import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import '../Styles/UserList.css';
import logo from '../../images/Logo.png';
import userIcon from '../../images/user_icon.png';
import { Link } from 'react-router-dom';
import CustomCursor from '../../components/customCursor';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');
  const [userCount, setUserCount] = useState(0);

  useEffect( () => {
    const fetch_data = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/get-all-users");
            console.log(response.data.data);
            setUsers(response.data.data);
            console.log(response);
            setUserCount(response.data.data.length)
        } catch (err) {
            console.log(err);
            setUsers(null);
        }
    }
    fetch_data();
}, []);

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
      <CustomCursor />
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
