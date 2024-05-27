import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import LoginPage from './components/signIn';
import SignUpPage from './components/signUp'; 
import AdminLandingPage from './components/AdminLandingPage'; 
import UserLandingPage from './components/user_landing'; 
import UserProductsPage from './components/user_products'; 
import UserOrdersPage from './components/UserOrders'; 
import ShoppingCart from './components/shopping_cart'; 
import ProductListing from './components/ProductListing';
import './App.css';
import UserList from './components/UserList';
import OrderFulfillment from './components/OrderFulfillment';
import SalesPage from './components/SalesPage';
import WeeklySales from './components/WeeklySales';
import MonthlySales from './components/MonthlySales';
import AnnualSales from './components/AnnualSales';


function App() {


  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/user" element={<LoginPage userType="user" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminLandingPage />} /> 
        <Route path="/loginlanding" element={<UserLandingPage cart={cart} />} /> 
        <Route path="/userproducts" element={<UserProductsPage cart={cart} setCart={setCart} />} />
        <Route path="/userorders" element={<UserOrdersPage cart={cart}  />} /> 
        <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />        <Route path="/productlisting" element={<ProductListing />} /> 
        <Route path="/orderfulfillment" element={<OrderFulfillment />} /> 
        <Route path="/userList" element={<UserList />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/sales/:id/weekly" element={<WeeklySales />} />
          <Route path="/sales/:id/monthly" element={<MonthlySales />} />
          <Route path="/sales/:id/annual" element={<AnnualSales />} />
      </Routes>
    </Router>
  );
}

export default App;
