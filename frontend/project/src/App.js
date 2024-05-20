// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>User Information</h1>
        </header>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
