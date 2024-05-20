import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderFulfillment from './components/OrderFulfillment';
import UserOrders from './components/UserOrders';
import { sampleOrders } from './components/SampleOrders';
import './App.css';

function App() {
  const [orders, setOrders] = useState(sampleOrders);

  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OrderFulfillment orders={orders} updateOrders={updateOrders} />} />
          <Route path="/orders" element={<UserOrders orders={orders} updateOrders={updateOrders} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
