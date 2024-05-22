import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
