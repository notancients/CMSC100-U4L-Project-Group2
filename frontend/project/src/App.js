import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './main/landingPage';
import LoginPage from './components/signIn';
import SignUpPage from './components/signUp'; 
import UserLandingPage from './user/Home/user_landing'; 
import UserOrdersPage from './user/Orders/UserOrders'; 
import ProductListing from './admin/Products/ProductListing';
import UserList from './admin/RegisteredAccounts/UserList';
import OrderFulfillment from './admin/Transactions/OrderFulfillment';
import SalesPage from './admin/Sales/SalesPage';
import WeeklySales from './admin/Sales/WeeklySales';
import MonthlySales from './admin/Sales/MonthlySales';
import AnnualSales from './admin/Sales/AnnualSales';
import UserProductsPage from './user/Products/user_products';
import ShoppingCart from './user/cart/shopping_cart';
import AdminLandingPage from './admin/Home/AdminLandingPage';

function App() {


  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/user" element={<LoginPage userType="User" />} />
        <Route path="/login/admin" element={<LoginPage userType="Admin" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminLandingPage />} /> 
        <Route path="/loginlanding" element={<UserLandingPage cart={cart} />} /> 
        <Route path="/userproducts" element={<UserProductsPage cart={cart} setCart={setCart} />} />
        <Route path="/userorders" element={<UserOrdersPage cart={cart}  />} /> 
        <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />   
        <Route path="/productlisting" element={<ProductListing />} /> 
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
