import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import LoginPage from './components/signIn';
import SignUpPage from './components/signUp'; 
import AdminLandingPage from './components/AdminLandingPage'; 
import UserLandingPage from './components/user_landing'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/user" element={<LoginPage userType="user" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminLandingPage />} /> 
        <Route path="/loginlanding" element={<UserLandingPage />} /> 

      </Routes>
    </Router>
  );
}

export default App;
