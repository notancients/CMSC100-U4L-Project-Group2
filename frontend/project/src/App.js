import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import LoginPage from './components/signIn';
import SignUpPage from './components/signUp'; 
import AdminLandingPage from './components/AdminLandingPage'; 
import UserLandingPage from './components/user_landing'; 
import UserProductsPage from './components/user_products'; 
import UserOrdersPage from './components/orders'; 
import ShoppingCartPage from './components/shoppingCart'; 
import ProductListing from './components/ProductListing';
import PRODUCT_SAMPLE_DATA from './components/ProductSample';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/user" element={<LoginPage userType="user" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminLandingPage />} /> 
        <Route path="/loginlanding" element={<UserLandingPage />} /> 
        <Route path="/userproducts" element={<UserProductsPage />} /> 
        <Route path="/userorders" element={<UserOrdersPage />} /> 
        <Route path="/shoppingcart" element={<ShoppingCartPage />} /> 
        <Route path="/productlisting" element={<ProductListing />} /> 
        <Route path="/" element={<UserList />} />
      </Routes>
      <div className="App">
        <header>
          <h1>User Information</h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
